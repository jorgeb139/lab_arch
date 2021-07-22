import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import imgInicio from '../../assets/images/portada_inicio.jpg'
import imgNosotros from '../../assets/images/portada_nosotros.jpg'
import imgProceso from '../../assets/images/portada_proceso.jpg'
import imgTrabajamos from '../../assets/images/portada_trabajamos.jpg'
import imgContacto from '../../assets/images/portada_contacto.jpg'
import imgPortafolio from '../../assets/images/portada_portafolio.jpg'
import imgFaqs from '../../assets/images/portada_faqs.jpg'
import DialogBox from './DialogBox'

const useStyles = makeStyles((theme) => ({
  Banner: {
    zIndex: -1,
    height: '80vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  Inicio: {
    backgroundImage: `url(${imgInicio})`
  },
  Nosotros: {
    backgroundImage: `url(${imgNosotros})`
  },
  Proceso: {
    backgroundImage: `url(${imgProceso})`
  },
  Trabajamos: {
    backgroundImage: `url(${imgTrabajamos})`
  },
  Contacto: {
    backgroundImage: `url(${imgContacto})`
  },
  Portafolio: {
    backgroundImage: `url(${imgPortafolio})`
  },
  Faqs: {
    backgroundImage: `url(${imgFaqs})`
  }
}))

const Banner = ({ bannerId, tittle, textBody, textButton }) => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} className={clsx(
        classes.Banner,
        {
          [classes.Inicio]: bannerId === 'Inicio',
          [classes.Nosotros]: bannerId === 'Nosotros',
          [classes.Proceso]: bannerId === 'Proceso',
          [classes.Trabajamos]: bannerId === 'Trabajamos',
          [classes.Contacto]: bannerId === 'Contacto',
          [classes.Portafolio]: bannerId === 'Portafolio',
          [classes.Faqs]: bannerId === 'Faqs'
        }
      )}>
      </Grid>
      {tittle ? (<DialogBox tittle={tittle} textBody={textBody} textButton={textButton}/>) : []}
    </Grid>
  )
}

Banner.propTypes = {
  bannerId: PropTypes.string,
  tittle: PropTypes.string,
  textBody: PropTypes.string,
  textButton: PropTypes.string
}

export default Banner
