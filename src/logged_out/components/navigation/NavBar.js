import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import Helmet from 'react-helmet';
import { sizing } from '@material-ui/system';
import logo from '../../logo_blue_green.PNG'; 
import { pink } from "@material-ui/core/colors";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: "#7CB7AF"
  },
  toolbar: {
  //  display: "flex",
  //  justifyContent: "space-around",
  //  minHeight: 128,
   // alignItems: 'flex-start',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  menuButtonTextWhite: {
 
    fontFamily: "Roboto",
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 600,
    color: "#FFFFFF",
  },
  menuButtonText: {
    fontFamily: "Roboto",
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 600,
    color: "#10564F"
  
  },
  brandText: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: 45,
    color: "#16796F"
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  centered: {

    flexGrow: "2",
    display: "flex",
    justifyContent: "center",
    '& > *': {
      margin: theme.spacing(1)
     
    }

  },
  edge: {

   
    display: "flex",
    justifyContent: "flex-end",
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: "white"
    }
    

  }
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/blog",
      name: "Pricing",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/blog",
      name: "Services",
      icon: <BookIcon className="text-white" />
    },
    {
      name: "Contact Us",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />
    }
  ];

  const menuItemsEdge = [
    {
      name: "Login",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />
    },
    {
      name: "Start Washing!",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />
    }];
  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" height="75%" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
     
            <img className={classes.img}  width="200"  src={logo} alt="" />
          </div>
          <div  className={classes.centered}>

              {menuItems.map(element => {
           if (element.link) {
            return (
              <Link
                key={element.name}
                to={element.link}
                className={classes.noDecoration}
                onClick={handleMobileDrawerClose}
              >
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonTextWhite }}
            
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                  </Link>
                );
              }
              return (
                <Button
                color="secondary"
                size="large"
                onClick={element.onClick}
                classes={{ text: classes.menuButtonTextWhite }}
        
                key={element.name}
              >
                {element.name}
              </Button>
              );
            }
              )}

          </div>

      <div  className={classes.edge}>

{menuItemsEdge.map(element => {

  return (
    <Button
    
      size="large"
    
      onClick={element.onClick}
      classes={{ text: classes.menuButtonText }}

      key={element.name}
    >
      {element.name}
    </Button>
  );
})}

</div>
        </Toolbar>
      </AppBar> 
  
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
