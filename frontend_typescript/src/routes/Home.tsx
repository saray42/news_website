import * as React from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import getArticlesByName from "../functions/getArticlesByName";
import getAllArticles from "../functions/getAllArticles";
import articleArray from "../types/articleArray";
import ArticleCard from "../components/ArticleCard";

export default function Home(): JSX.Element {
    const { topic } = useParams();
    const [articles, setArticles] = React.useState<articleArray>([]);

    useEffect(() => {
        const asyncUseEffect = async () => {
            if (topic) {
                setArticles(await getArticlesByName(topic));
            }
            else {
                setArticles(await getAllArticles());
            }
        }
        asyncUseEffect();
    }, [topic]);

    useEffect(() => {
        console.log(articles)
    }, [articles]);

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100%" , bgcolor: "white", p: 4
        }}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {articles.length > 0 ? articles.map((article, key) => {
                    return (<Grid item key={key}><ArticleCard article={article} /></Grid>)
                }) : <Typography variant="h2" gutterBottom>
                    Nothing to read on the topic {topic}!
                </Typography>}
            </Grid>
        </Box>
    )
}