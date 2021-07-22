import React, { useState, useEffect } from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core'
import axios from 'axios'

const stepsImport = 'formularySteps.json'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 30,
    marginTop: -20,
    paddingRight: 50,
    marginBottom: 30
  },
  numbers: {
    fontSize: '4.5rem',
    color: '#FBCEB1',
    fontFamily: 'Montserrat, sans-serif',
    textShadow: '2px 2px 3px #D6D6D6',
    marginRight: '20px'
  },
  bodyText: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#848484'
  },
  subtitleContainer: {
    alignItems: 'flex-end',
    fontFamily: 'Montserrat, sans-serif'
  },
  subtitleText: {
    fontSize: '1.1rem',
    marginBottom: '8px'
  }
}))

const Steps = () => {
  const classes = useStyles()
  const [steps, setSteps] = useState([])

  useEffect(() => {
    (async () => {
      const detailedSteps = await axios.get(stepsImport)
      setSteps(detailedSteps.data)
    })()
  }, [])

  return (
    <div className={classes.container}>
      {steps.map((element) => (
        <div key={element.step}>
          <Grid container className={classes.subtitleContainer}>
            <Grid item xs={4} md={2}>
              <b className={classes.numbers}>{element.step}</b>
            </Grid>
            <Grid item xs={8} md={10}>
              <Typography className={classes.subtitleText}>
                {element.title}
              </Typography>
            </Grid>
          </Grid>
          <Typography style={{ textAlign: 'justify' }} className={classes.bodyText}>
            {element.bodyText}
          </Typography>
        </div>
      ))}
    </div>
  )
}

export default Steps
