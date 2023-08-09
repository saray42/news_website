import { Button } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import props from '../interfaces/buttonProps';

export default function ButtonGeneral({ buttonText, link }: props): JSX.Element {
    const realLink: string = `news/${link}`;
    const navigate: NavigateFunction = useNavigate();

    return (
        <Button variant="contained" size="large" sx={{
            bgcolor: "violet",
            color: "black",
            '&:hover': {
                bgcolor: "purple",
                color: "white"
            },
        }}
            onClick={(): void => {
                navigate(realLink);
            }}>
            {buttonText}
        </Button >
    )
}