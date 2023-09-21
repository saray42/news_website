import { Button } from '@mui/material';
import signup from "../functions/fetch/signup";
import signupProps from '../interfaces/signupButtonProps';
import response from '../interfaces/response';

export default function ButtonSignup({ buttonText, firstName, lastName, email, password, changeResponse, disabled}: signupProps): JSX.Element {

    return (
        <Button variant="contained" size="large" sx={{
            bgcolor: "violet",
            color: "black",
            '&:hover': {
                bgcolor: "purple",
                color: "white"
            },
        }}
        disabled={disabled}
        onClick={async () => {
            const newResponse: response = await signup(firstName, lastName, email, password);
            changeResponse(newResponse.message);
        }}
        >
            {buttonText}
        </Button >
    )
}