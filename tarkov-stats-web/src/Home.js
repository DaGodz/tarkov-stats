import React from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


function Home() {

    const classes = useStyles();
    return (


        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Tarkov Stats
            </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Behold the historical record of your tarkov raids!
            </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Raids
                  </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Graph porn
                  </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>

    );
}

export default Home;