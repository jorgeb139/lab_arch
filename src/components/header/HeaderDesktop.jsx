import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import logo from '../../assets/images/logo_blanco_largo_invertido2.png'
import MenuItems from './MenuItems'
import { NavLink } from 'react-router-dom'
import './Styles.css'

const useStyles = makeStyles(() => ({
  containerLogo: {
    flexGrow: 1
  },
  logo: {
    maxWidth: '160px',
    padding: '10px'
  },
  initialNavBar: {
    background: 'transparent'
  },
  activeNavBar: {
    background: 'rgba(0, 0, 0, 0.54)'
  }
}))

const HeaderDesktop = () => {
  const classes = useStyles()
  const [navBar, setNavBar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 260) {
      setNavBar(false)
    } else {
      setNavBar(true)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
    <AppBar className={navBar ? classes.initialNavBar : classes.activeNavBar} elevation={0}>
        <Toolbar>
          <div className={classes.containerLogo}>
            <img src={logo} alt="lab_arch" className={classes.logo}/>
          </div>
          <div>
            {MenuItems.map((menuItem) => {
              const { menuTitle, pageURL } = menuItem
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
              )
            })}
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderDesktop
