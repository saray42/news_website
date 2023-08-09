import { Button } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface props {
    buttonText: string,
    link: string
}

export default function ButtonBar({ buttonText, link }: props): JSX.Element {
    const realLink: string = `news/${link}`;
    const navigate: NavigateFunction = useNavigate();

    return (
        <Button variant="text" size="large" sx={{
            color: "violet",
            borderRadius: 0,
            borderBottom: "0.25rem solid transparent",
            '&:hover': {
                borderBottom: "0.25rem solid"
            },
        }}
            onClick={(): void => {
                navigate(realLink);
            }}>
            {buttonText}
        </Button >
    )
}