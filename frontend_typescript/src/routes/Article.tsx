import * as React from "react"
import { useEffect } from "react";
import { useParams, useLocation, NavigateFunction, useNavigate, Location } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import getArticleById from "../functions/getArticleById";
import article from "../interfaces/article";

export default function Article(): JSX.Element {
    const { id } = useParams();
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [article, setArticle] = React.useState<article>();

    useEffect(() => {
        const asyncUseEffect = async () => {
            if (id) setArticle(await getArticleById(Number.parseInt(id)));
        }
        asyncUseEffect();
    }, [id]);

    if (article?.id) {
        setTimeout(() => {
            if (!location.pathname.includes(`/news/${article?.articleType.name}/article/`)) navigate("/");
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
            >
                {article?.id ?
                    <Typography variant="h6" gutterBottom>{article.body}</Typography> :
                    <Typography variant="h2" gutterBottom>This article does not exist!</Typography>}

            </Grid>
        </Box>
    )
}