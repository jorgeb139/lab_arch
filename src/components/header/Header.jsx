import React from 'react'
import { Hidden } from '@material-ui/core'

import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
  return (
    <>
      <Hidden smDown>
        <HeaderDesktop/>
      </Hidden>
      <Hidden mdUp>
        <HeaderMobile/>
      </Hidden>
    </>
  )
}

export default Header
