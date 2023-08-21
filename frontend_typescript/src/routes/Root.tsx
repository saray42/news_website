import { Outlet } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import ButtonBar from "../components/ButtonBar";
import bottomBar from "../objects/bottomButtons";
import newsTopics from "../objects/topicButtons";

export default function Root(): JSX.Element {

    return (
        <>
            <Box sx={{
                flexGrow: 1, width: "100%", bgcolor: "black", p: 2, height: "8vh"
            }}
            >
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item>
                        <Grid container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Grid item sx={{
                                color: "white",
                            }}
                            >
                                <ButtonBar buttonText="news" link="" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            {newsTopics.map((key: string, index: number): JSX.Element => {
                                return (<Grid item key={key}>
                                    <ButtonBar buttonText={newsTopics[index]} link={newsTopics[index] + "/"} />
                                </Grid>)
                            })}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Grid item sx={{
                                color: "white",
                            }}
                            >
                                <ButtonBar buttonText="login" link="login/" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                width: "100%", minHeight: "90vh"
            }}
            >
                <Outlet />
            </Box>

            <Box sx={{
                flexGrow: 1, width: "100%", bgcolor: "black", p: 2, height: "8vh"
            }}
            >
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    {bottomBar.map((key: string, index: number): JSX.Element => {
                        return (<Grid item key={key}>
                            <ButtonBar buttonText={bottomBar[index]} link={bottomBar[index] + "/"} />
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </>
    );
}