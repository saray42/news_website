import { Button } from '@mui/material';
import props from '../interfaces/buttonProps';

export default function ButtonLogin({ buttonText }: props): JSX.Element {

    return (
        <Button variant="contained" size="large" sx={{
            bgcolor: "violet",
            color: "black",
            '&:hover': {
                bgcolor: "purple",
                color: "white"
            },
        }}
        >
            {buttonText}
        </Button >
    )
}