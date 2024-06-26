import * as React from "react"
import { useParams, useLocation, Location, NavigateFunction, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import getArticlesByType from "../functions/fetch/getArticlesByType";
import getAllArticles from "../functions/fetch/getAllArticles";
import articleArray from "../types/articleArray";
import ArticleCard from "../components/ArticleCard";
import newsTopics from "../objects/topicButtons";
import checkIfStringContainsAny from "../functions/checkIfStringContainsAny";
import LoadingCirlce from "../components/LoadingCirlce";

export default function Home(): JSX.Element {
    const { topic } = useParams();
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [articles, setArticles] = React.useState<articleArray>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true);
        const asyncUseEffect = async () => {
            if (topic) {
                setArticles(await getArticlesByType(topic));
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else {
                setArticles(await getAllArticles());
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        }
        setTimeout(() => {
            if (loading) {
                asyncUseEffect();
            }
        }, 15000);
        asyncUseEffect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topic]);


    if (topic) {
        setTimeout(() => {
            if (!checkIfStringContainsAny(location.pathname, newsTopics)) navigate("/");
        }, 1);
    }

    if (loading) {
        return (
            <LoadingCirlce />
        )
    }

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", minHeight: "100%", bgcolor: "white", p: 4
        }}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={8}
            >
                {articles.length > 0 ?
                    articles.map((article, key) => {
                        return (<Grid item key={key}><ArticleCard article={article} /></Grid>)
                    }) :
                    <Grid item>
                        <Typography variant="h2">
                            Nothing to read on the topic {topic}!
                        </Typography>
                    </Grid>
                }
            </Grid>
        </Box>
    )
}