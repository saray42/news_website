import articleArray from "../types/articleArray";

export default async function getArticlesByName(type: string): Promise<articleArray> {
    const response: Response = await fetch(`http://localhost:8080/articles/type/${type}`);
    const articles: articleArray = await response.json();
    return articles;
}