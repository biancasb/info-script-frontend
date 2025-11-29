import React, { useEffect, useState } from "react";
import { List, Item, ItemTitle, ItemMeta, ItemLink, Loading, ErrorBox, Thumb, ItemExcerpt } 
from "./styles";

interface DevToArticle {
  id: number;
  title: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  cover_image?: string | null;
  social_image?: string | null;
  tag_list?: string[];
  user?: { name?: string };
  description?: string;
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let controller: AbortController | null = null;
    const REFRESH_MS = 5 * 60 * 1000; // 5 minutos
    const CACHE_KEY = "devto_news_cache_v1";
    const CACHE_MAX_AGE = 60 * 60 * 1000; // 1 hora

    const load = async (options?: { initial?: boolean }) => {
      try {
        controller?.abort();
        controller = new AbortController();
        if (options?.initial) setLoading(true);
        setError(null);
        const base = "https://dev.to/api";
        // Prioriza os "top da semana" para cobrir https://dev.to/top/week
        const candidates = [
          `${base}/articles?per_page=8&top=7`,
          `${base}/articles?per_page=8&state=rising`,
          `${base}/articles/latest?per_page=8`,
        ];

        let success = false;
        let itemsForCache: DevToArticle[] | null = null;
        for (const endpoint of candidates) {
          try {
            const url = `${endpoint}&_ts=${Date.now()}`;
            const res = await fetch(url, {
              signal: controller.signal,
              cache: "no-store",
              headers: {
                "Cache-Control": "no-cache",
                Accept: "application/vnd.forem.api-v1+json",
              },
            });
            if (!res.ok) continue;
            const data: DevToArticle[] = await res.json();
            if (Array.isArray(data) && data.length) {
              if (!mounted) return;
              // Preferir notícias do dia; complementar com do mês com imagem
              const now = new Date();
              const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
              const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
              const isToday = (d: string) => {
                const dt = new Date(d);
                return dt >= startOfDay;
              };
              const isThisMonth = (d: string) => {
                const dt = new Date(d);
                return dt >= startOfMonth && dt <= now;
              };
              const todayItems = data.filter(a => isToday(a.published_at));
              let chosen: DevToArticle[] = [];
              if (todayItems.length >= 4) {
                // se já há notícias suficientes do dia, usa até 8
                chosen = todayItems.slice(0, 8);
              } else {
                // complementa com do mês que tenham imagem de capa
                const monthWithImage = data
                  .filter(a => !isToday(a.published_at) && isThisMonth(a.published_at) && !!a.cover_image)
                  .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
                chosen = [...todayItems, ...monthWithImage].slice(0, 8);
              }
              setArticles(chosen.length ? chosen : data);
              itemsForCache = chosen.length ? chosen : data;
              success = true;
              break;
            }
          } catch (_) {
            // tenta próximo endpoint
          }
        }

        // Fallback estático se nenhum endpoint funcionou
        if (!success) {
          const fallback: DevToArticle[] = [
            {
              id: -1,
              title: "Confira as últimas no DEV.to",
              url: "https://dev.to/latest",
              published_at: new Date().toISOString(),
              reading_time_minutes: 1,
              cover_image: null,
              social_image: null,
              tag_list: [],
            },
            {
              id: -2,
              title: "Tópicos em alta no DEV.to",
              url: "https://dev.to/t/technology",
              published_at: new Date().toISOString(),
              reading_time_minutes: 1,
              cover_image: null,
              social_image: null,
              tag_list: [],
            },
          ];
          if (!mounted) return;
          setArticles(fallback);
          setError(null);
          itemsForCache = fallback;
        }

        // cachear itens obtidos
        if (itemsForCache) {
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ ts: Date.now(), articles: itemsForCache })
            );
          } catch {}
        }
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          // Tentar usar cache em caso de erro
          try {
            const raw = localStorage.getItem(CACHE_KEY);
            if (raw) {
              const parsed = JSON.parse(raw) as { ts: number; articles: DevToArticle[] };
              if (Array.isArray(parsed.articles) && parsed.articles.length) {
                setArticles(parsed.articles);
                setError(null); // esconder erro porque temos fallback
                return;
              }
            }
          } catch {}
          // Se não houver cache e também falhou, mantém uma mensagem leve,
          // mas apenas se nenhum fallback foi aplicado acima
          if (!articles.length) {
            setError("Não foi possível carregar as notícias agora.");
          }
        }
      } finally {
        if (options?.initial) setLoading(false);
      }
    };

    // Carregamento inicial
    // Tenta hidratar com cache imediatamente para evitar tela vazia
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { ts: number; articles: DevToArticle[] };
        if (
          parsed &&
          Array.isArray(parsed.articles) &&
          parsed.articles.length &&
          Date.now() - parsed.ts < CACHE_MAX_AGE
        ) {
          setArticles(parsed.articles);
          setLoading(false);
        }
      }
    } catch {}

    // Em seguida busca atualizada em background
    load({ initial: articles.length === 0 });

    // Atualização periódica
    const intervalId = window.setInterval(() => {
      load();
    }, REFRESH_MS);

    // Atualizar ao voltar foco/visibilidade
    const onVisible = () => {
      if (document.visibilityState === "visible") load();
    };
    const onFocus = () => load();
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      mounted = false;
      controller?.abort();
      window.clearInterval(intervalId);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (loading) return <Loading>Carregando notícias…</Loading>;
  if (error) return <ErrorBox>{error}</ErrorBox>;

  return (
    <List>
      {articles.map((a) => {
        const date = new Date(a.published_at);
        const dateStr = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
        // Só mostra imagem quando há capa real; caso contrário, apenas título
        const imgSrc = a.cover_image || null;
        return (
          <Item key={a.id}>
            <ItemLink href={a.url} target="_blank" rel="noopener noreferrer">
              {imgSrc && <Thumb src={imgSrc} alt={a.title} loading="lazy" />}
              <ItemTitle>{a.title}</ItemTitle>
            </ItemLink>
            <ItemMeta>
              {dateStr} · {a.reading_time_minutes} min
            </ItemMeta>
            {a.description && <ItemExcerpt>{a.description}</ItemExcerpt>}
          </Item>
        );
      })}
    </List>
  );
};

export default NewsList;
