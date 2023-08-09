import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
/* import { NavigateFunction, useNavigate } from 'react-router-dom'; */
import props from '../interfaces/article';
import convertISODate from '../functions/convertISODate';

interface articleObject {
    article: props
}

export default function ArticleCard({ article }: articleObject): JSX.Element {
    /* const navigate: NavigateFunction = useNavigate(); */

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
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