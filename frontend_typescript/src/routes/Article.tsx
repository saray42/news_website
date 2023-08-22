import * as React from "react"
import { useEffect } from "react";
import { useParams, useLocation, NavigateFunction, useNavigate, Location } from "react-router-dom";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import getArticleById from "../functions/fetch/getArticleById";
import article from "../interfaces/article";
import LoadingCirlce from "../components/LoadingCirlce";
import newParagraphAfterDot from "../functions/newParagraphAfterDot";

export default function Article(): JSX.Element {
    const { id } = useParams();
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [article, setArticle] = React.useState<article>();
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
        const asyncUseEffect = async () => {
            if (id) setArticle(await getArticleById(Number.parseInt(id)));
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        asyncUseEffect();
    }, [id]);

    if (article?.id) {
        setTimeout(() => {
            if (!location.pathname.includes(`/news/${article?.articleType.name}/article/`)) navigate("/");
        }, 1);
    }

    if (loading) {
        return (
            <LoadingCirlce />
        )
    }

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100%", bgcolor: "white", pb: 0, pt: 4, pl: 48, pr: 48
        }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {article?.id ?
                    <>
                        <Grid item>
                            <Typography variant="h2" gutterBottom textAlign={"center"}>{article.headline}</Typography>
                        </Grid>
                        <Grid item
                            sx={{ p: 4 }}
                        >
                            <img src={article.picture} alt="article-image" />
                        </Grid>
                        {article.lead ?
                            <Grid item>
                                <Typography variant="h6" gutterBottom textAlign={"center"}>{article.lead}</Typography>
                            </Grid> :
                            <></>
                        }
                        <Grid item
                            sx={{ pl: 16, pr: 16 }}>
                            <Typography variant="body1" gutterBottom textAlign={"justify"}>{newParagraphAfterDot(article.body)}</Typography>
                        </Grid>
                        {article.conclusion ?
                            <Grid item>
                                <Typography variant="h6" gutterBottom textAlign={"center"}>{article.conclusion}</Typography>
                            </Grid> :
                            <></>
                        }
                        <Grid item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ p: 4 }}
                        >
                            <Grid item>
                                <Typography variant="body1" textAlign={"center"}>{"Written by " + article.author.firstName + " " + article.author.lastName}</Typography>
                            </Grid>
                            <Grid item
                                sx={{ p: 1 }}
                            >
                                <Avatar alt={`${article.author.firstName} + ${article.author.lastName}`} src={article.author.profilePicture} variant="rounded" />
                            </Grid>
                        </Grid>
                    </> :
                    <Grid item>
                        <Typography variant="h2" gutterBottom textAlign={"center"}>This article does not exist!</Typography>
                    </Grid>}

            </Grid>
        </Box>
    )
}