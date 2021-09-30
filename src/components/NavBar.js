import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import {
  IconButton,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import {
  Grid,
  Avatar
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  bg: {
    background: '#000000'
  },
  container: {
    width: 1170,
    margin: "auto"
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1"
  },

  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#fff",
    backgroundSize: "cover"
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent"
    }
  },

  avatar: {
    height: "100%",
    borderRadius: 0
  },

  loginButton: {
    background: "#0000FF",
    color: "#fff",
    // borderRadius: "25px",
    padding: "5px 11px",

    "&:hover": {
      background: "blue",
      boxShadow: "0px 2px 10px #888888"
    }
  }
}));


const NavBar = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div>
      <AppBar position="static" className={classes.bg}>
        <Container>
          <Toolbar>
            <Grid className={classes.grow16}>
              <Button className={[classes.mainLogo]}>
                <img
                  src="https://images.websitebuilderexpert.com/wp-content/uploads/2019/07/12060148/webflow-logo-1.png"
                  alt="new" style={{height:"81px"}}
                />
              </Button>
            </Grid>
            <Grid className={classes.grow}>
              <Button
                color="inherit"
                className={classes.buttonFontSize}
              >
                Showcase
              </Button>
              <Button
                color="inherit"
                className={classes.buttonFontSize}
              >
                Designers

              </Button>
              <Button
                color="inherit"
                className={classes.buttonFontSize}
              >
                Learn & support

              </Button>
            </Grid>

            <Button color="inherit" className={classes.buttonFontSize}>
              Log In
            </Button>
            <Button
              color="primary"
              className={[classes.buttonFontSize, classes.loginButton]}
            >
              Sign up for free
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
export default NavBar;