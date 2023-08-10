import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import props from '../interfaces/article';
import convertISODate from '../functions/convertISODate';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';

interface articleObject {
    article: props
}

export default function ArticleCard({ article }: articleObject): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    const { topic } = useParams();

    return (
        <Card sx={(theme) => ({
            maxWidth: 400, maxHeight: 400, 
            boxShadow: theme.shadows[14],
            transition: '0.2s',
            '--joy-shadowChannel': '0 0 0',
            '--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.25)',
            '&:hover': {
                boxShadow: theme.shadows[24],
                transform: 'translateY(-3px)',
              },
        })}>
            <CardActionArea onClick={(): void => {
                topic ?
                    navigate(`article/${article.id}`) :
                    navigate(`${article.articleType.name}/article/${article.id}`);
            }}>
                <CardMedia
                    component="img"
                    image={article.picture}
                    alt="article picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Article from {convertISODate(article.pointOfCreation)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.headline}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}