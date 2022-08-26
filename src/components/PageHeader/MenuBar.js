import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import {FaUserAlt} from "react-icons/fa";

import Auth from "../Auth/Auth";
import { appStore } from "../../store/AppStore";

import Logo from "../../logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  appbarStyle:{
backgroundColor:"gray"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily:'cursive'
  },
  userData: {
    display: "inline-flex",
    alignItems: "center"
  },
  score: {
    marginRight: theme.spacing(2)
  },
  userButton: {
    flex: 1,
    borderRadius: 0
  },
  userName: {
    marginRight: theme.spacing(1)
  },
  userAvatar: {
    width: 35
  },
  logout:{
    
  }
}));

function MenuBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const { username, score, login, logout } = appStore;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleMenuClose();
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbarStyle}>
        <Toolbar>
          <img src="/Images/logo1.png" width="80px" height="70px"/>
          <Typography variant="h6" className={classes.title} >
           Casino Night
          </Typography>
          {!username ? (
            <Auth login={login} />
          ) : (
            <div className={classes.userData}>
              <Typography className={classes.score}>Score: ${score}</Typography>
              <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
                className={classes.userButton}
              >
                <Typography className={classes.userName}>{username}</Typography>
                <FaUserAlt className={classes.userAvatar}/>
               
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={menuOpen}
                onClose={handleMenuClose}
                className={classes.logout}
              >
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default observer(MenuBar);
