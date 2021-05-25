import React from 'react'

import ProfessionalBio from '../components/nosotros/ProfessionalBio'

import Banner from '../components/banner/Banners'
import CompanyBio from '../components/nosotros/CompanyBio'
import Message from '../components/nosotros/Message'

const DialogParams = {
  bannerId: 'Nosotros'
}

const Nosotros = () => {
  return (
    <div>
      <Banner {...DialogParams}/>
      <ProfessionalBio/>
      <CompanyBio/>
      <Message/>
    </div>
  )
}

export default Nosotros
