import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import {
  Box,
  Menu,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo_blanco_largo_invertido2.png'
import MenuItems from './MenuItems'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  containerLogo: {
    flexGrow: 1
  },
  logo: {
    maxWidth: '140px',
    padding: '10px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100px'
    }
  },
  btn: {
    color: '#FBCEB1'
  },
  initialNavBar: {
    background: 'transparent'
  },
  activeNavBar: {
    background: 'rgba(0, 0, 0, 0.54)'
  }
}))

const HeaderMobile = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [navBar, setNavBar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 260) {
      setNavBar(false)
    } else {
      setNavBar(true)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar className={navBar ? classes.initialNavBar : classes.activeNavBar} elevation={0}>
        <Toolbar>
          <Box className={classes.containerLogo}>
            <img src={logo} alt="lab_arch" className={classes.logo}/>
          </Box>
          <div>
            <IconButton
              onClick={handleClick}
              className={classes.btn}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={!!anchorEl}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem className = "menuMobile">
                {MenuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem
                  return (
                    <Button
                      key={`${menuTitle}`}
                    >
                      <NavLink
                      exact to={pageURL}
                      className ="linksMobile"
                      activeClassName = "active"
                      >
                      {menuTitle}
                      </NavLink>
                    </Button>
                  )
                })}
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderMobile
