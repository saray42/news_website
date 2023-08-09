import * as React from "react"
import { useParams } from "react-router-dom";
import getArticlesByName from "../functions/getArticlesByName";
import getAllArticles from "../functions/getAllArticles";
import { useEffect } from "react";
import { articleArray } from "../types/articleArray";

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
        articles ? Object.keys(articles[0]).forEach((item, i) => (
            <li key={i}>
                <span>{item}</span>
            </li>
        )) : console.log(undefined);
    }, [articles]);

    return (
        <div>
            home
        </div>
    )
}