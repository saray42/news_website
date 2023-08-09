export default async function getAllArticles(): Promise<JSON> {
    const response: Response = await fetch(`http://localhost:8080/articles`);
    const articles: JSON = await response.json();
    return articles;
}