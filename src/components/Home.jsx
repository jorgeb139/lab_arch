import React from 'react'

import Banner from './banner/Banner'
import HeaderDesktop from './header/HeaderDesktop'

const Home = () => {
    return (
        <div>
            <HeaderDesktop/>
            <Banner bannerId = "Inicio" />
        </div>
    )
}

export default Home
