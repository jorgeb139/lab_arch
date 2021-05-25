import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import imgLogo from '../../assets/images/imagotipo.png'

const useStyles = makeStyles((theme) => ({
  vertical: {
    borderRight: '6px solid #E5E5E5',
    height: '134px',
    marginRight: '50%',
    [theme.breakpoints.down('sm')]: {
      borderRight: '5px solid #E5E5E5',
      height: '100px'
    }
  },
  bioContainer: {
    padding: '100px 60px 100px 60px',
    textAlign: 'center'
  },
  logoContainer: {
  },
  logo: {
    paddingTop: '40px',
    height: '400px',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '250px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '200px'
    }
  },
  textContainer: {
    display: 'flex'
  },
  mainTitle: {
    fontSize: '1.8rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem'
    }
  },
  bodyText: {
    textAlign: 'justify',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem',
    lineHeight: '25px',
    color: '#3B3B3B',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      lineHeight: '20px',
      paddingTop: '20px'
    }
  }
}))

const CompanyBio = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.vertical}/>
      <Grid container className={classes.bioContainer}>
        <Grid item md={8} xs={12} className={classes.textContainer}>
          <Grid container>
            <Grid item sm={12}>
              <Typography className={classes.mainTitle}>
                Así nació lab_arch
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography className={classes.bodyText} style={{ paddingTop: '40px' }}>
                Como un estudio de arquitectura basado en los valores del trabajo colaborativo, arquitectura bioclimática y adaptándonos a los avances no solo tecnológicos, sino culturales en los que estamos envueltos, eso sí, siempre teniendo como premisa brindar confort y un diseño en el que los clientes se sientan cómodos y felices.
              </Typography>
              <Typography className={classes.bodyText} style={{ paddingTop: '30px' }} >
                Hemos ido creciendo y ya no soy solo yo, tenemos en nuestro equipo profesionales variados que permiten desarrollar cada proyecto de una manera eficiente, en el que te acompañamos en cada etapa escuchándote, resolviendo todas tus inquietudes y superando tus expectativas para lograr un resultado increíble.
              </Typography>
              <Typography className={classes.bodyText} style={{ paddingTop: '30px' }} >
                Arquitectos, dibujantes, ingenieros, constructores, elaboramos anteproyecto, proyecto, especialidades, trámites ante Municipalidad, todo para que tu proyecto avance de manera eficiente.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12} className={classes.logoContainer}>
          <img src={imgLogo} alt="Lab arch estudio de arquitectura" className={classes.logo}/>
        </Grid>
      </Grid>
      <div className={classes.vertical}/>
    </div>
  )
}

export default CompanyBio
