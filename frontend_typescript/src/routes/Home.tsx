import * as React from "react"
import { useParams } from "react-router-dom";
import getArticlesByName from "../functions/getArticlesByName";
import getAllArticles from "../functions/getAllArticles";
import { useEffect } from "react";
import articleArray from "../types/articleArray";
import ArticleCard from "../components/ArticleCard";

export default function Home(): JSX.Element {
    const { topic } = useParams();
    const [articles, setArticles] = React.useState<articleArray | undefined>();

    useEffect(() => {
        const asyncUseEffect = async () => {
            if (topic) {
                setArticles(await getArticlesByName(topic));
            }
            else {
                setArticles(await getAllArticles());
            }
        }
        return () => {
            asyncUseEffect();
        }
    }, [topic]);

    useEffect(() => {
        console.log(articles)
    }, [articles]);

    return (
        <div>
            {articles ? <ArticleCard article={articles[0]} /> : "home"}
        </div>
    )
}