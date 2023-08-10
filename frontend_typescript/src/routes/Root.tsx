import { Outlet } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import ButtonBar from "../components/ButtonBar";

export default function Root(): JSX.Element {
    const newsTopics: Array<string> = ["Politics", "Sport", "World", "Science", "Tech", "Austria", "Economics"];
    const bottomBar: Array<string> = ["About", "Contact Us", "Terms of Use"];

    return (
        <>
            <Box sx={{
                flexGrow: 1, width: "100%", bgcolor: "black", p: 2
            }}>
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
                            }}>
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
                                    <ButtonBar buttonText={newsTopics[index]} link={newsTopics[index].toLowerCase()} />
                                </Grid>)
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                width: "100%", minHeight: "90vh"
            }}>
                <Outlet />
            </Box>

            <Box sx={{
                flexGrow: 1, width: "100%", bgcolor: "black", p: 2
            }}>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={8}
                >
                    {bottomBar.map((key: string, index: number): JSX.Element => {
                        return (<Grid item key={key}>
                            <ButtonBar buttonText={bottomBar[index]} link={bottomBar[index].toLowerCase()} />
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </>
    );
}