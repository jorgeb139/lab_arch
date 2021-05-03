import React from 'react'

import Banner from '../components/banner/Banners'
import DiagonalDiv from '../components/diagonalDiv/DiagonalDiv'
import PortfolioCarousel from '../components/portfolio/carousel/PortfolioCarousel'
import ShortBio from '../components/shortBio/ShortBio'

const DialogParams = {
  bannerId: 'Inicio',
  tittle: 'No es simplemente un diseño...',
  textBody: 'Por eso nos enfocamos en cubrir y sobrepasar tus requerimientos, sobretodo beneficiando tu bolsillo, además, creamos para ti diseños bio-climáticos que permiten disfrutar de ambientes cómodos, ideales para descansar y pasar rato en familia, a la vez que son eficientes y te permitirán ahorrar en los meses cálidos y frios.',
  textButton: 'CUENTANOS QUE PROYECTO TIENES EN MENTE'
}

const Home = () => {
  return (
    <div>
      <Banner {...DialogParams}/>
      <PortfolioCarousel/>
      <DiagonalDiv/>
      <ShortBio/>
    </div>
  )
}

export default Home
