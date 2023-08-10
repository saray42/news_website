import * as React from "react"
import { useEffect } from "react";
import { useParams, useLocation, Location, NavigateFunction, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import getArticlesByType from "../functions/getArticlesByType";
import getAllArticles from "../functions/getAllArticles";
import articleArray from "../types/articleArray";
import ArticleCard from "../components/ArticleCard";
import newsTopics from "../objects/topicButtons";
import checkIfStringContainsAny from "../functions/checkIfStringContainsAny";

export default function Home(): JSX.Element {
    const { topic } = useParams();
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [articles, setArticles] = React.useState<articleArray>([]);

    useEffect(() => {
        const asyncUseEffect = async () => {
            if (topic) {
                setArticles(await getArticlesByType(topic));
            }
            else {
                setArticles(await getAllArticles());
            }
        }
        asyncUseEffect();
    }, [topic]);

    if (topic) {
        setTimeout(() => {
            console.log(location)
            if (!checkIfStringContainsAny(location.pathname, newsTopics)) navigate("/");
        }, 1);
    }

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100%", bgcolor: "white", p: 4
        }}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={4}
            >
                {articles.length > 0 ?
                    articles.map((article, key) => {
                        return (<Grid item key={key}><ArticleCard article={article} /></Grid>)
                    }) :
                    <Grid item>
                        <Typography variant="h2" gutterBottom>
                            Nothing to read on the topic {topic}!
                        </Typography>
                    </Grid>
                }
            </Grid>
        </Box>
    )
}