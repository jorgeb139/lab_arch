import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'

const itemsDiagonal = 'DiagonalMenu.json'
const angle = '4deg'

const useStyles = makeStyles((theme) => ({
  diagonalContainer: {
    height: '640px',
    [theme.breakpoints.down('xs')]: {
      height: '1000px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '1100px'
    },
    marginBottom: '100px',
    background: '#FBCEB1',
    transform: `skewY(-${angle})`
  },
  textContainer: {
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      height: '0px'
    },
    fontFamily: 'Montserrat, sans-serif'
  },
  titleContainer: {
    height: '100px',
    transform: `skewY(${angle})`,
    marginTop: '50px',
    textAlign: 'center'
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem'
    },
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop: '50px'
  },
  textBlocks: {
    transform: `skewY(${angle})`,
    maxHeight: '270px',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center'
  },
  titleTextBlock: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem'
    },
    fontWeight: 'bold',
    paddingTop: '20px'
  },
  bodyTextBlock: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8rem',
    color: '#3B3B3B',
    padding: '20px 80px'
  },
  image: {
    width: 128
  },
  prueba1: {
    marginTop: '1%'
  },
  column2: {
    marginTop: '3.3%'
  },
  column3: {
    marginTop: '5.6%'
  }
}))

const DiagonalDiv = () => {
  const classes = useStyles()
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      const items = await axios.get(itemsDiagonal)
      setItems(items.data)
    })()
  }, [])

  return (
    <div>
      <div className={classes.diagonalContainer}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>
            Nuestra filosofía
          </Typography>
        </div>
        <Grid container className={classes.textContainer}>
          {items.map((item) => (
            <Grid item md={4} xs={12} key={item.id}
              className={clsx(
                classes.textBlocks,
                {
                  [classes.prueba1]: item.id === 1,
                  [classes.column2]: item.id === 2,
                  [classes.column3]: item.id === 3
                }
              )}
            >
              <div>
                <img src = {item.img} alt="Arquitectura bioclimática" className={classes.image}>
                </img>
                <Typography className={classes.titleTextBlock}>
                  {item.title}
                </Typography>
                <Typography className={classes.bodyTextBlock}>
                  {item.textBody}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default DiagonalDiv
