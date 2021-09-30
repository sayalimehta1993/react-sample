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
const Abc = (props)=> {


  const classes = useStyles();


    return(
       <div>
            {
          props.list.map((row, index) => (


          <Card className={classes.card} sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}>
            <CardMedia
              className={classes.media}
              image={
                row.download_url
              }
            />

            <Box style={{ flexGrow: 1 }} />
            <Divider />
            <Box style={{ p: 2, padding: '20px' }}>
              <Grid
                container
                spacing={2}
                style={{ justifyContent: 'space-between' }}
              >
                <Grid
                  item
                  style={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <AccessTimeIcon color="action" />
                  <Typography
                    color="textSecondary"
                    display="inline"
                    style={{ pl: 1 }}
                    variant="body2"
                  >
                    
                    Updated 2hr ago
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <GetAppIcon color="action" />
                  <Typography

                    style={{
                      pl: 1, color: "textSecondary",
                      display: "inline"
                    }}
                  >
                    {11111}
                    {' '}
                    Downloads
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
           ))
           }
       </div>
    )

}

export default Abc;