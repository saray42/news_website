import { CircularProgress, Grid, Box } from '@mui/material';

export default function LoadingCirlce(): JSX.Element {

    return (
        <Box sx={{
            flexGrow: 1, width: "100%", height: "100%", bgcolor: "white", p: 4
        }}><Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
                <Grid item>
                    <CircularProgress thickness={5} size={80} sx={{ color: "violet" }} />
                </Grid>
            </Grid>
        </Box>
    )
}