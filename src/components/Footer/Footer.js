import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background:"#878280 "
  },
  grow: {
    flexGrow: 1
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed"  className={classes.appBar}>
      <Toolbar>
        <Typography variant="body2" color="inherit">
          Copyright © Online Casino 2022. Madhuri Ambole
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
