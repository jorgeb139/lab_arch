import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '100px 80px 100px 80px',
    [theme.breakpoints.down('xs')]: {
      padding: '100px 30px 100px 30px'
    },
    textAlign: 'center'
  },
  title: {
    fontSize: '1.8rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem'
    }
  },
  bodyText: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem',
    lineHeight: '25px',
    color: '#3B3B3B',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      lineHeight: '20px'
    }
  }
}))

const Message = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Apostamos por un modelo de negocio ético
      </Typography>
      <Typography className={classes.bodyText}>
        Entendemos, valoramos y respetamos la vida, su entorno y las personas que lo componen. Por eso, cada día trabajo duro para que lab_arch se convierta en un estudio con sólidos principios, además, que nuestros diseños permitan estar en armonía con un mundo mejor.
      </Typography>
    </div>
  )
}

export default Message
