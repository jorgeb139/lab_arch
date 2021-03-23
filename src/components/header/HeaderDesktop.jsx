import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import logo from '../../assets/images/logo_blanco_largo_invertido2.png'
import MenuItems from './MenuItems';
import { NavLink } from 'react-router-dom';
import "../../App.css";

const useStyles = makeStyles(() => ({
  containerLogo: {
    flexGrow: 1,
  },
  logo: {
        maxWidth: "160px",
        padding: "10px",
  },
}));

const HeaderDesktop = () => {
  const classes = useStyles();

  return (
    <>
    <AppBar position='fixed' color="transparent">
        <Toolbar>
          <div className={classes.containerLogo}>
            <img src={logo} alt="lab_arch" className={classes.logo}/>
          </div>
          <div>
            {MenuItems.map((menuItem) => {
              const { menuTitle, pageURL } = menuItem;
                return (
                  <Button
                    key={`${menuTitle}`}
                    color="secondary"
                  >
                    <NavLink 
                      exact to={pageURL} 
                      className ="links"
                      activeClassName = "active"
                    >
                      {menuTitle}
                    </NavLink>
                  </Button>
                );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderDesktop;
