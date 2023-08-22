import articleArray from "../../types/articleArray";

export default async function getAllArticles(): Promise<articleArray> {
    const response: Response = await fetch(`http://localhost:8080/articles`);
    const articles: articleArray = await response.json();
    return articles;
}