import * as React from "react"
import { useParams } from "react-router-dom";
import getArticlesByName from "../functions/getArticlesByName";
import getAllArticles from "../functions/getAllArticles";
import { useEffect } from "react";

export default function Home(): JSX.Element {
    const { topic } = useParams();
    const [articles, setArticles] = React.useState<JSON | undefined>();

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
        console.log(articles);
    }, [articles]);

    return (
        <div>{topic ? topic : "home"}</div>
    )
}