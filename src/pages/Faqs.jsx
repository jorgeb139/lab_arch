import React from 'react'
import { makeStyles } from '@material-ui/core'

import Banner from '../components/banner/Banners'
import AccordionElement from '../components/faqs/AccordionElement'
import CTA from '../components/faqs/CTA'
import IntroductionText from '../components/faqs/IntroductionText'

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
  bannerId: 'Faqs',
  tittle: 'PREGUNTAS FRECUENTES',
  textBody: 'Desde el momento que se comienza a diseñar hasta cuando se realiza la recepción final en la respectiva Municipalidad transcurren varias etapas y procesos que quizás puedan ser un poco confusos, para eso te podemos ayudar en esta sección.'
}

const Faqs = () => {
  const classes = useStyles()

  return (
    <div>
      <Banner {...DialogParams} />
      <IntroductionText/>
      <AccordionElement />
      <div className={classes.vertical} />
      <CTA/>
    </div>
  )
}

export default Faqs
