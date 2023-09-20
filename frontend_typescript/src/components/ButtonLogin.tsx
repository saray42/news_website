import { Button } from '@mui/material';
import signup from "../functions/fetch/signup";

interface loginProps {
    buttonText: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    changeResponse: (response: string) => void
}

export default function ButtonLogin({ buttonText, firstName, lastName, email, password, changeResponse}: loginProps): JSX.Element {

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
            changeResponse(await signup(firstName, lastName, email, password));
        }}
        >
            {buttonText}
        </Button >
    )
}