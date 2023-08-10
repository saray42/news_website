import { Box, Typography, Grid } from "@mui/material"
import { useRouteError } from "react-router-dom";
import ButtonGeneral from "../components/ButtonGeneral";


export default function ErrorPage(): JSX.Element {
    const error: unknown = useRouteError();

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100vh", bgcolor: "whtite", color: "black"
        }}
        >
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                    height: "100%"
                }}
            >
                <Grid item>
                    <Typography variant="h2" gutterBottom>
                        Oooops, something went wrong!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        {error.statusText || error.message}
                    </Typography>
                </Grid>
                <Grid item>
                    <ButtonGeneral buttonText="Go back home!" link="" />
                </Grid>
            </Grid>
        </Box>
    )
}