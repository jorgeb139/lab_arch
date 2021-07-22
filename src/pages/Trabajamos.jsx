import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import Banner from '../components/banner/Banners'
import Steps from '../components/trabajamos/Steps'
import FormToWork from '../components/trabajamos/FormToWork'

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
  bannerId: 'Trabajamos',
  tittle: '¿DESEAS QUE TRABAJEMOS JUNTOS?',
  textBody: 'Nos encantaría saber más sobre tu proyecto para brindarte la mejor forma para ayudarte y cotizarte. Rellena el siguiente formulario  y así hablamos tranquilamente, ¿te parece?'
}

const Trabajamos = () => {
  const classes = useStyles()

  return (
    <>
      <Banner {...DialogParams}/>
      <div className={classes.vertical} />
      <Grid container>
        <Grid item xs={12} sm={5}>
          <Steps/>
        </Grid>
        <Grid item xs={12} sm={7}>
          <FormToWork/>
        </Grid>
      </Grid>
    </>
  )
}

export default Trabajamos
