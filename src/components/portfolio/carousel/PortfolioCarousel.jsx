import React from 'react'
import { makeStyles } from '@material-ui/core'

import Cards from './Cards'

const useStyles = makeStyles(() => ({
  container: {
    padding: '50px',
    overflowX: 'hidden'
  }
}))

const PortfolioCarousel = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Cards/>
    </div>
  )
}

export default PortfolioCarousel
