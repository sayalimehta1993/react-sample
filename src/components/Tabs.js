import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import list from '../list';
import list1 from '../list1';
import list2 from '../list2';
import Container from '@material-ui/core/Container';

import Abc from './Popular'
import {
  Divider,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';


const useStyles = makeStyles((theme) => ({
  tab_bg: {
    background: '#ffffff',
    color: '#000000'
  },
  card: {
    maxWidth: 360,
    transition: "0.3s",
    display: 'inline-grid',
    padding: '30px',
    margin: '15px',
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
    }
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
export default function TabsData() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSub = (event, newValue) => {
    setValue1(newValue);
  };


  return (
    <div>
      <Container>
        <Grid container alignItems="center">
          <Grid item>
            <Button>Explore the showcase</Button>
          </Grid>
          <Grid item style={{ flexGrow: 1 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabs}
            >
              <Tab label="Popular" />
              <Tab label="Recent" />
              <Tab label="Cloneable" />
            </Tabs>
          </Grid>

        </Grid>
      </Container>
      <div style={{ backgroundColor: "#E7E9EB" }}>
        <TabPanel value={value} index={0}>
          <Container>
            <Tabs
              value={value1}
              onChange={handleChangeSub}
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabs}
            >
              <Tab label="Recent" />
              <Tab label="Most Liked" />
              <Tab label="Most Viewed" />
            </Tabs>
          </Container>
          <Container>
            <TabPanel value={value1} index={0}>

              <Abc list={list} />

            </TabPanel>
          </Container>
          <Container>
            <TabPanel value={value1} index={1}>
              <Abc list={list1} />

            </TabPanel>
          </Container>
          <Container>
            <TabPanel value={value1} index={2}>
              <Abc list={list2} />
            </TabPanel>
          </Container>

        </TabPanel>
      </div>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
      <div style={{ backgroundColor: "#E7E9EB" }}>
        <TabPanel value={value} index={1}>
          <Container>
            <Tabs
              value={value1}
              onChange={handleChangeSub}
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabs}
            >
              <Tab label="Recent" />
              <Tab label="Most Liked" />
              <Tab label="Most Viewed" />
            </Tabs>
          </Container>
          <Container>
            <TabPanel value={value1} index={0}>

              <Abc list={list} />

            </TabPanel>
          </Container>
          <Container>
            <TabPanel value={value1} index={1}>
              <Abc list={list1} />

            </TabPanel>
          </Container>
          <Container>
            <TabPanel value={value1} index={2}>
              <Abc list={list2} />
            </TabPanel>
          </Container>

        </TabPanel>
      </div>

      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
      <div style={{ backgroundColor: "#E7E9EB" }}>
        <TabPanel value={value} index={2}>
          <Container>
            <Tabs
              value={value1}
              onChange={handleChangeSub}
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabs}
            >
              <Tab label="Recent" />
              <Tab label="Most Liked" />
              <Tab label="Most Viewed" />
            </Tabs>
          </Container>
          <Container>
            <TabPanel value={value1} index={0}>

              <Abc list={list} />

            </TabPanel>
          </Container>
          <Container>
            <TabPanel value={value1} index={1}>
              <Abc list={list1} />

            </TabPanel>
          </Container>
          <Container>
            <TabPanel value={value1} index={2}>
              <Abc list={list2} />
            </TabPanel>
          </Container>

        </TabPanel>
      </div>

    </div>
  );
}