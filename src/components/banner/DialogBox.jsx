import React from 'react'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  cuadro: {
    marginTop: '-220px',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '6%'
    },
    background: 'rgba(229, 229, 229, 0.9)',
    borderRadius: '10px',
    minWidth: '350px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px'
    },
    boxShadow: '2px 2px 4px 1px rgba(0, 0, 0, 0.25)'
  },
  textTittle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem'
    },
    padding: '30px 20px 10px 20px',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px'
  },
  textBody: {
    padding: '0px 40px 30px 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 30px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem'
    },
    textAlign: 'justify'
  },
  containerCTA: {
    padding: '15px 30px 30px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 40px 20px 40px'
    },
    textAlign: 'center'
  },
  CTA: {
    fontSize: '0.9rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    },
    background: '#FBCEB1',
    '&:hover': {
      background: '#FBCEB1',
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease 0s',
      boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.25)'
    },
    borderRadius: '5px',
    fontWeight: 'bold',
    padding: '10px',
    fontFamily: 'Montserrat, sans-serif;',
    color: '#3F3F3F',
    transition: 'all 0.3s ease 0s',
    boxShadow: '2px 2px 4px 1px rgba(0, 0, 0, 0.25)'
  }
}))

const DialogBox = ({ tittle, textBody, textButton }) => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item md={5} sm={6} xs={6} className={classes.cuadro}>
          <Typography variant='h1'className={classes.textTittle}>
            {tittle}
          </Typography>
          <Typography variant='h2' className={classes.textBody}>
            {textBody}
          </Typography >
          {textButton
            ? (<div className={classes.containerCTA}><Button className={classes.CTA}> {textButton} </Button></div>)
            : <div></div>
          }
        </Grid>
      </Grid>
    </>
  )
}

DialogBox.propTypes = {
  tittle: PropTypes.string,
  textBody: PropTypes.string,
  textButton: PropTypes.string
}

export default DialogBox
