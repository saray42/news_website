import { Box, Grid, Typography } from "@mui/material";

export default function Login(): JSX.Element {
    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100%", bgcolor: "white", p: 4
        }}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <Typography variant="h2">
                        This is login! WIP
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}