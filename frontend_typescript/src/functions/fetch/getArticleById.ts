import article from "../../interfaces/article";

export default async function getArticleById(id: number): Promise<article> {
    const response: Response = await fetch(`http://localhost:8080/newsApi/articles/byId/${id}`);
    const article: article = await response.json();
    return article;
}