import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px 10% 20px 10%'
  }
}))

const IntroductionText = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='body1' style={{ textAlign: 'center' }}>
        <div>
          Hemos tomado las preguntas más recurrentes de otros que como tú, tenían dudas y las hemos plasmado acá para que puedas revisarlas cada vez que necesites y puedas entenderlas.
        </div>
        <div style={{ marginTop: 20 }}>
          De todas maneras recuerda que si te quedan aún dudas, o siquieres conversar directamente con nosotros, con gusto te podemos ayudar.
        </div>
      </Typography>
    </div>
  )
}

export default IntroductionText
