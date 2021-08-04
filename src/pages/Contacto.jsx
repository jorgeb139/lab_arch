import React from 'react'
import { makeStyles } from '@material-ui/core'

import Banner from '../components/banner/Banners'
import Form from '../components/contacto/Form'
import Navigate from '../components/contacto/Navigate'

const useStyles = makeStyles((theme) => ({
  vertical: {
    borderRight: '6px solid #E5E5E5',
    height: '134px',
    marginRight: '50%',
    marginTop: 60,
    marginBottom: 60,
    [theme.breakpoints.down('sm')]: {
      borderRight: '5px solid #E5E5E5',
      height: '100px'
    }
  }
}))

const DialogParams = {
  bannerId: 'Contacto',
  tittle: '¿TE HAS QUEDADO CON ALGUNA DUDA?',
  textBody: 'No hay problema, escribenos en el formulario de abajo y en un periodo máximo de 72 horas nos comunicaremos contigo.'
}

const Contacto = () => {
  const classes = useStyles()

  return (
    <div>
      <Banner {...DialogParams} />
      <Form />
      <div className={classes.vertical} />
      <Navigate />
    </div>
  )
}

export default Contacto
