import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import imgEmprendedor from '../../assets/images/emprendedor.jpg'

const useStyles = makeStyles((theme) => ({
  bioContainer: {
    padding: '100px 80px 100px 80px',
    [theme.breakpoints.down('xs')]: {
      padding: '100px 30px 100px 30px',
      textAlign: 'center'
    },
    textAlign: 'center'
  },
  imageContainer: {
  },
  image: {
    height: '530px',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '350px'
    }
  },
  textContainer: {
    paddingLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '30px',
      paddingLeft: '0px'
    }
  },
  mainTitle: {
    fontSize: '1.8rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem'
    }
  },
  secondaryTitle: {
    fontSize: '1.1rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold'
  },
  bodyText: {
    textAlign: 'justify',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem',
    color: '#3B3B3B',
    lineHeight: '28px',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      lineHeight: '20px',
      paddingTop: '20px'
    }
  },
  btnContainer: {
    paddingTop: '30px'
  },
  btn: {
    background: '#FBCEB1',
    height: '55px',
    paddingRight: '50px',
    paddingLeft: '50px',
    fontSize: '0.85rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    boxShadow: '3px 4px 4px 1px rgba(0, 0, 0, 0.3)',
    textShadow: '2px 1px 2px rgba(0, 0, 0, 0.3)'
  }
}))

const ProfessionalBio = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container className={classes.bioContainer}>
        <Grid item md={6} xs={12} className={classes.imageContainer}>
          <img src={imgEmprendedor} alt="Arquitecto jefe emprendedor" className={classes.image}/>
        </Grid>
        <Grid item md={6} xs={12} className={classes.textContainer}>
          <Grid container>
            <Grid item sm={12}>
              <Typography className={classes.secondaryTitle}>
                ¡Hola!
              </Typography>
              <Typography className={classes.mainTitle}>
                Soy Arquitecto Lider
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography className={classes.bodyText}>
                Soy arquitecto egresado de la Universidad de la Serena y con maestria en la Universidad de tal en Arquitectura Bio-climática. He trabajado como constructor y como arquitecto en diversos estudios en Santiago.
              </Typography>
              <Typography className={classes.bodyText} style={{ paddingTop: '15px' }} >
                De toda esta experiencia aprendí un montón de cosas que se deben y otras que no se deben hacer, y quería seguir avanzando en mi carrera prfesional, pero quería dejar mi huella, diseñar con mi propio estilo y esto me dio el impulso para dedicarme de manera independiente y formar mi propio estudio.
              </Typography>
              <div className={classes.btnContainer}>
                <Button className={classes.btn}>
                  ¿Trabajamos juntos?
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProfessionalBio
