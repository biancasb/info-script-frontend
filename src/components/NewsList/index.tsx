import React, { useEffect, useState } from "react";
import { List, Item, ItemTitle, ItemMeta, ItemLink, Loading, ErrorBox, Thumb } 
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
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);
        // DEV.to public API (no key needed)
        const res = await fetch("https://dev.to/api/articles?per_page=6&top=7", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: DevToArticle[] = await res.json();
        setArticles(data);
      } catch (e: any) {
        if (e.name !== "AbortError") {
          setError("Não foi possível carregar as notícias agora.");
        }
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (loading) return <Loading>Carregando notícias…</Loading>;
  if (error) return <ErrorBox>{error}</ErrorBox>;

  return (
    <List>
      {articles.map((a) => {
        const date = new Date(a.published_at);
        const dateStr = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
        const imgSrc = a.cover_image || a.social_image || null;
        return (
          <Item key={a.id}>
            {imgSrc && <Thumb src={imgSrc} alt={a.title} loading="lazy" />}
            <ItemLink href={a.url} target="_blank" rel="noopener noreferrer">
              <ItemTitle>{a.title}</ItemTitle>
            </ItemLink>
            <ItemMeta>
              {dateStr} · {a.reading_time_minutes} min
            </ItemMeta>
          </Item>
        );
      })}
    </List>
  );
};

export default NewsList;
