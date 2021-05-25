import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import logo from '../../../assets/images/imagotipo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 80,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-20px'
    }
  },
  logoContainer: {
    textAlign: 'center'
  },
  logo: {
    maxWidth: '160px'
  },
  textContainer: {
    paddingRight: 90,
    [theme.breakpoints.down('sm')]: {
      padding: '20px 90px'
    }
  },
  textTitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  textBody: {
    paddingTop: 20,
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'justify',
    fontSize: '0.8rem'
  }
}))

const ShortBio = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item md={6} xs={12} className={classes.logoContainer}>
        <img src={logo} alt="lab_arc" className={classes.logo}/>
      </Grid>
      <Grid item md={6} xs={12} className={classes.textContainer}>
        <Typography className={classes.textTitle}>
          ¡HOLA! <br/> Soy Arquitecto Lider
        </Typography>
        <Typography className={classes.textBody}>
          Y lab_arch es el resultado de años de esfuerzo y trabajo colaborativo en el cual nos enfocamos en ser un estudio a la vanguardia de las circustancias actuales, buscamos crear espacios en los que simplemente querrás llegar rápido, pasar tiempo de calidad con tus amigos, familia y no salir, enfocados en la comodidad, eficiencia térmica y adaptandonos a tu presupuesto.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ShortBio
