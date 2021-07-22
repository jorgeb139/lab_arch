import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px 10% 20px 10%'
  },
  button: {
    paddingLeft: 30,
    fontWeight: 'bold',
    background: '#FBCEB1',
    '&:hover': {
      background: '#FBCEB1',
      transform: 'scale(1.05)',
      transition: 'all 0.5s ease 0s',
      boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.25)'
    },
    transition: 'all 0.5s ease 0s',
    marginBottom: 60,
    height: 50,
    fontSize: '0.9rem',
    borderRadius: 10
  }
}))

const CTA = () => {
  const classes = useStyles()

  return (
    <div style={{ textAlign: 'center' }} className={classes.root}>
      <Typography variant='h3'>
        SI AÚN TE QUEDAN DUDAS
      </Typography>
      <Typography variant='body1' style={{ marginTop: 20, marginBottom: 20 }}>
        Puedes preguntarnos lo que deseas llenando el formulario en la siguiente página, o si lo deseas, también encontrarás nuestro correo electrónico y un número de teléfono al cual puedes llamar.
      </Typography>
      <Button
        variant='contained'
        className={classes.button}
        component={Link}
        to="/contacto"
      >
        DESEO HACERLO
      </Button>
    </div>
  )
}

export default CTA
