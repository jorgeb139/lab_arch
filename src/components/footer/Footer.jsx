import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import '../../App.css'
import MapFooter from './MapFooter'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  containers: {
    color: theme.palette.text.secondary,
    background: '#FBCEB1',
    paddingBottom: '10px'
  },
  tittle_section: {
    padding: theme.spacing(0.6),
    paddingLeft: '38%',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  info: {
    padding: theme.spacing(0.5),
    paddingLeft: '33%',
    fontSize: '0.9rem'
  },
  container_copyright: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: '0.9rem',
    background: 'rgba(0, 0, 0, 0.24)'
  },
  icon: {
    paddingRight: '10px',
    width: '35px'
  },
  botones: {
    paddingLeft: '15px',
    marginTop: '-10px',
    '&:hover': {
      background: 'none',
      textDecoration: 'none'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.containers} >
          < Box className={classes.tittle_section}>
            Contact
          </Box>
          <MapFooter/>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.containers} >
          <Box className={classes.tittle_section}>
            Social
          </Box>
          <MapFooter menuType={'SocialNetworks'}/>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.container_copyright}>
            <label style={{ fontWeight: 'normal' }}>
              Website made by:
            </label>
            <label style={{ fontWeight: 'bold' }}>
              {' Jorge Burguera'}
            </label>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
