import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    padding: '50px'
  },
  containerText: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  padre: {
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '50px'
  },
  contenedorFlechas: {
    display: 'flex',
    flex: '1 1 auto',
    alignItems: 'center'
  },
  flechas: {
    flex: '1 1 auto',
    background: 'violet',
    textAlign: 'center'
  },
  contenedorContenido: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '8 1 auto',
    background: 'cyan'
  },
  titulo: {
    flex: '1 1 auto',
    textAlign: 'center'
  },
  contenido: {
    flex: '1 1 auto',
    textAlign: 'center'
  }
}))

const testimonios = [
  {
    id: 1,
    persona: 'Pepito',
    comentario: 'SADASD ASDAS DASAD SAD'
  },
  {
    id: 2,
    persona: 'Pepito',
    comentario: 'SADASD ASDAS DASAD SAD'
  }
]

console.log(testimonios[0].id)
/* eslint-disable */
const SliderComents = () => {
  const [comentario, setComentario] = useState(testimonios[0])
  const classes = useStyles()

  const handleClose = () => {
    console.log(comentario)
  }

  const handleBackwardClick = () => {
    console.log(comentario)
  }

  const handleForwardClick = () => {
    console.log('Adelante')
  }

  return (
    <div className={classes.padre}>
      <div className={classes.contenedorFlechas}>
        <Button onClick={handleClose} className={classes.flechas}>
          Flecha 1
        </Button>
      </div>
      <div className={classes.contenedorContenido}>
        <div className={classes.titulo}>
          {testimonios[0].persona}
        </div>
        <div className={classes.contenido}>
          {testimonios[0].comentario}
        </div>
      </div>
      <div className={classes.contenedorFlechas}>
        <Button onClick={handleForwardClick} className={classes.flechas}>
          Flecha 2
        </Button>
      </div>
    </div>
  )
}

export default SliderComents
