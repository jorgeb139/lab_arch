import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import axios from 'axios'
import { Link } from 'react-router-dom'

const elementsImport = 'navigate.json'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 70
  },
  button: {
    fontWeight: 'bold',
    background: '#FBCEB1',
    '&:hover': {
      background: '#FBCEB1',
      transform: 'scale(1.05)',
      transition: 'all 0.5s ease 0s',
      boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.25)'
    },
    transition: 'all 0.5s ease 0s',
    height: 50,
    borderRadius: 10
  },
  fieldTextContainer: {
    marginTop: 20
  },
  navigationContainer: {
    padding: '30px 30px',
    [theme.breakpoints.down('xs')]: {
      padding: '40px 30px'
    }
  }
}))

const Navigate = () => {
  const classes = useStyles()
  const [elements, setElements] = useState([])

  useEffect(() => {
    (async () => {
      const detailedElements = await axios.get(elementsImport)
      setElements(detailedElements.data)
    })()
  }, [])

  return (
    <Grid container className={classes.root}>
      {elements.map((element) => (
        <Grid item xs={12} sm={4} key={element.id} className={classes.navigationContainer}>
          <Typography variant='h3'>
            {element.title}
          </Typography>
          <Typography variant='body1' style={{ paddingTop: 20 }}>
            {element.textBody}
          </Typography>
          <div style ={{ paddingTop: 30 }}>
            <Button
              variant='contained'
              className={classes.button}
              component={Link}
              to={element.route}
            >
              {element.textButton}
            </Button>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default Navigate
