import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home';
import Raids from './Raids';
import { Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';

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

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <React.Fragment>
        <AppBar position="relative">
          <Toolbar>
            <DirectionsRunIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Tarkov Stats
          </Typography>
          </Toolbar>
        </AppBar>
  

      </React.Fragment>
      <Route exact path="/" component={Home}></Route>
      <Route  path="/Raids" component={Raids}></Route>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          DG Enterprises
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}


    </div>

    
  );

}

export default App;
