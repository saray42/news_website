import { Button } from '@mui/material';
import loginProps from '../interfaces/loginButtonProps';
import response from '../interfaces/response';
import login from '../functions/fetch/login';

export default function ButtonLogin({ buttonText, email, password, changeResponse}: loginProps): JSX.Element {

    return (
        <Button variant="contained" size="large" sx={{
            bgcolor: "violet",
            color: "black",
            '&:hover': {
                bgcolor: "purple",
                color: "white"
            },
        }}
        onClick={async () => {
            const newResponse: response = await login(email, password);
            changeResponse(newResponse);
        }}
        >
            {buttonText}
        </Button >
    )
}