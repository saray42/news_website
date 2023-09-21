import { Box, Grid, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography } from "@mui/material";
import { VisibilityOff, Visibility, InfoOutlined } from "@mui/icons-material";
import * as React from "react";
import ButtonLogin from "../components/ButtonLogin";
import validateEmail from "../functions/validateEmail";
import validatePassword from "../functions/validatePassword";

export default function Signup(): JSX.Element {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [firstname, setFirstname] = React.useState<string>("");
    const [lastname, setLastname] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [response, setResponse] = React.useState<string>("");
    const [disabled, setDisabled] = React.useState<boolean>(true);

    const changeResponse = (repsonse: string): void => {
        setResponse(repsonse);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        if (firstname.length >= 3 && lastname.length >= 3 && validateEmail(email) && validatePassword(password)) setDisabled(false);
        else setDisabled(true);
    }, [firstname, lastname, email, password]);

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100%", bgcolor: "white", p: 4
        }}>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="firstName">Firstname</InputLabel>
                        <OutlinedInput
                            error={false}
                            id="firstName"
                            type="text"
                            label="Firstname"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="lastName">Lastname</InputLabel>
                        <OutlinedInput
                            error={false}
                            id="lastName"
                            type="text"
                            label="Lastname"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="email">E-Mail</InputLabel>
                        <OutlinedInput
                            error={false}
                            id="email"
                            type="text"
                            label="E-Mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            error={false}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sx={{
                        height: 24,
                        widht: 24
                    }} ><InfoOutlined /></Grid>
                    <Grid item><Typography>Password must contain at least 8 characters, 1 letter, 1 number</Typography></Grid>
                </Grid>
                <Grid item>
                    <ButtonLogin buttonText="Signup" firstName={firstname} lastName={lastname} email={email} password={password} changeResponse={changeResponse} disabled={disabled} />
                </Grid>
                <Grid item>
                    <Typography>{response}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}