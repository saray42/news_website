import { Box, Grid, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import * as React from "react";
import ButtonLogin from "../components/ButtonLogin";

export default function Signup(): JSX.Element {
    const [showPassword, setShowPassword] = React.useState(false);
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [response, setResponse] = React.useState("");

    const changeResponse = (repsonse: string): void => {
        setResponse(repsonse);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
                <Grid item>
                    <ButtonLogin buttonText="Signup" firstName={firstname} lastName={lastname} email={email} password={password} changeResponse={changeResponse}/>
                </Grid>
                <Grid item>
                    <Typography>{response}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}