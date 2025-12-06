import React, { useEffect, useState } from "react";
import {
  List,
  Item,
  ItemTitle,
  ItemMeta,
  ItemLink,
  Loading,
  ErrorBox,
  Thumb,
  ItemExcerpt,
  ItemContent,
} from "./styles";

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
    console.debug("NewsList: mounted");
    return () => console.debug("NewsList: unmounted");
  }, []);

  useEffect(() => {
    console.debug("NewsList state", { loading, error, articles: articles.length });
  }, [loading, error, articles.length]);

  useEffect(() => {
    let mounted = true;
    let controller: AbortController | null = null;
    const REFRESH_MS = 5 * 60 * 1000; 
    const CACHE_KEY = "devto_news_cache_v1";
    const CACHE_MAX_AGE = 60 * 60 * 1000; 

    const load = async (options?: { initial?: boolean }) => {
      try {
        controller?.abort();
        controller = new AbortController();
        if (options?.initial) setLoading(true);
        setError(null);
        const base = "https://dev.to/api";
        const candidates = [
          `${base}/articles?per_page=20&top=7`,
          `${base}/articles?per_page=20`,
          `${base}/articles?per_page=20&state=rising`,
          `${base}/articles/latest?per_page=20`,
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
                Accept: "application/vnd.forem.api-v1+json",
              },
            });
            if (!res.ok) {
              console.debug("NewsList: endpoint failed", endpoint, res.status);
              continue;
            }
            const data: DevToArticle[] = await res.json();
            if (Array.isArray(data) && data.length) {
              if (!mounted) return;
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

              const withImage = data.filter((a) => !!a.cover_image || !!a.social_image);
              const todayWithImage = withImage.filter((a) => isToday(a.published_at));
              const monthWithImage = withImage.filter((a) => !isToday(a.published_at) && isThisMonth(a.published_at));

              const today = data.filter((a) => isToday(a.published_at));
              const month = data.filter((a) => !isToday(a.published_at) && isThisMonth(a.published_at));

              let chosen: DevToArticle[] = [];

              if (todayWithImage.length >= 4) {
                // já há imagens suficientes do dia
                chosen = todayWithImage.slice(0, 8);
              } else {
                chosen = [
                  ...todayWithImage,
                  ...monthWithImage,
                ];

                if (chosen.length < 8) {
                  const addToday = today.filter((a) => !chosen.includes(a));
                  chosen = [...chosen, ...addToday];
                }

                if (chosen.length < 8) {
                  const addMonth = month.filter((a) => !chosen.includes(a));
                  chosen = [...chosen, ...addMonth];
                }

                if (chosen.length < 8) {
                  const addOtherWithImage = withImage.filter((a) => !chosen.includes(a));
                  chosen = [...chosen, ...addOtherWithImage];
                }

                if (chosen.length < 8) {
                  const others = data.filter((a) => !chosen.includes(a));
                  chosen = [...chosen, ...others];
                }

                chosen = chosen.slice(0, 8);
              }

              setArticles(chosen.length ? chosen : data);
              itemsForCache = chosen.length ? chosen : data;
              success = true;
              break;
            }
          } catch (err) {
            console.debug("NewsList: direct fetch failed, trying proxy", endpoint, err);
            try {
              const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
              const proxyRes = await fetch(proxy, { cache: "no-store" });
              if (!proxyRes.ok) {
                console.debug("NewsList: proxy fetch failed", proxyRes.status);
                continue;
              }
              const text = await proxyRes.text();
              let data: DevToArticle[] = [];
              try {
                data = JSON.parse(text) as DevToArticle[];
              } catch (e) {
                console.debug("NewsList: proxy returned non-json", e);
                continue;
              }

              if (Array.isArray(data) && data.length) {
                if (!mounted) return;
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

                const withImage = data.filter((a) => !!a.cover_image || !!a.social_image);
                const todayWithImage = withImage.filter((a) => isToday(a.published_at));
                const monthWithImage = withImage.filter((a) => !isToday(a.published_at) && isThisMonth(a.published_at));
                const today = data.filter((a) => isToday(a.published_at));
                const month = data.filter((a) => !isToday(a.published_at) && isThisMonth(a.published_at));

                let chosen: DevToArticle[] = [];

                if (todayWithImage.length >= 4) {
                  chosen = todayWithImage.slice(0, 8);
                } else {
                  chosen = [...todayWithImage, ...monthWithImage];
                  if (chosen.length < 8) {
                    const addToday = today.filter((a) => !chosen.includes(a));
                    chosen = [...chosen, ...addToday];
                  }
                  if (chosen.length < 8) {
                    const addMonth = month.filter((a) => !chosen.includes(a));
                    chosen = [...chosen, ...addMonth];
                  }
                  if (chosen.length < 8) {
                    const addOtherWithImage = withImage.filter((a) => !chosen.includes(a));
                    chosen = [...chosen, ...addOtherWithImage];
                  }
                  if (chosen.length < 8) {
                    const others = data.filter((a) => !chosen.includes(a));
                    chosen = [...chosen, ...others];
                  }
                  chosen = chosen.slice(0, 8);
                }

                setArticles(chosen.length ? chosen : data);
                itemsForCache = chosen.length ? chosen : data;
                success = true;
                break;
              }
            } catch (e2) {
              // falhou também via proxy - tenta próximo endpoint
              console.debug("NewsList: proxy attempt failed", e2);
              continue;
            }
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
        // Preferir `cover_image`, depois `social_image` quando houver
        const imgSrc = a.cover_image || a.social_image || null;
        return (
          <Item key={a.id}>
            {imgSrc && (
              <ItemLink href={a.url} target="_blank" rel="noopener noreferrer">
                <Thumb src={imgSrc} alt={a.title} loading="lazy" />
              </ItemLink>
            )}

            <ItemContent>
              <ItemLink href={a.url} target="_blank" rel="noopener noreferrer">
                <ItemTitle>{a.title}</ItemTitle>
              </ItemLink>

              <ItemMeta>
                {dateStr} · {a.reading_time_minutes} min
              </ItemMeta>

              {a.description && <ItemExcerpt>{a.description}</ItemExcerpt>}
            </ItemContent>
          </Item>
        );
      })}
    </List>
  );
};

export default NewsList;
