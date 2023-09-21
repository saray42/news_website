import { Box, Grid, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import * as React from "react";
import ButtonLogin from "../components/ButtonLogin";
import response from "../interfaces/response";
import { useChangeLoggedIn } from "../routes/Root";

export default function Login(): JSX.Element {
    const { changeLoggedIn } = useChangeLoggedIn();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [response, setResponse] = React.useState<response>();

    const changeResponse = (repsonse: response): void => {
        setResponse(repsonse);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        if (response?.status === 202) changeLoggedIn(true);
        changeLoggedIn(false);
    }, [response])

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
                    <ButtonLogin buttonText="Login" email={email} password={password} changeResponse={changeResponse} />
                </Grid>
                <Grid item>
                    <Typography>{response?.message}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}