import articleArray from "../../types/articleArray";

export default async function getArticlesByType(type: string): Promise<articleArray> {
    const response: Response = await fetch(`http://localhost:8080/newsApi/articles/byType/${type}`);
    const articles: articleArray = await response.json();
    return articles;
}