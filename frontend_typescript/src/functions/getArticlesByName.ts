export default async function getArticlesByName(type: string): Promise<JSON> {
    const response: Response = await fetch(`http://localhost:8080/articles/type/${type}`);
    const articles: JSON = await response.json();
    return articles;
}