import React from 'react'
import { Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2'

import ValidationSchemaContacto from '../../services/ValidationSchemaContacto'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px 20%'
  },
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
    borderRadius: 10,
    width: '125px'
  },
  fieldTextContainer: {
    marginTop: 20
  }
}))

const Form = () => {
  const classes = useStyles()

  const { handleSubmit, reset, control, formState: { errors } } = useForm({
    resolver: yupResolver(ValidationSchemaContacto),
    mode: 'onChange'
  })

  const onSubmit = values => {
    event.preventDefault()
    Swal.fire({
      title: '¡Muchas gracias!',
      text: 'En un lapso no mayor a 48 horas nos comunicaremos contigo',
      icon: 'success',
      confirmButtonText: 'Excelente'
    })
    reset({})
  }

  return (
    <div className={classes.root}>
      <Typography variant='body1' style={{ textAlign: 'center' }}>
        De todas maneras recuerda que si te quedan aún dudas, o si quieres conversar directamente con nosotros, con gusto te podemos ayudar.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container >
          <Controller
            name='names'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Grid item xs={12} sm={6} style={{ paddingRight: 5 }}>
                <TextField
                  {...field}
                  type='text'
                  placeholder='Nombre y apellido'
                  variant="outlined"
                  id='nombres'
                  fullWidth
                  error={!!errors.names}
                  helperText={errors.names ? errors.names?.message : ''}
                  className={classes.fieldTextContainer}
                />
              </Grid>
            )}
          />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Grid item xs={12} sm={6} style={{ paddingLeft: 5 }}>
                <TextField
                  {...field}
                  type='email'
                  placeholder='Tu correo electrónico'
                  variant="outlined"
                  id='email'
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ''}
                  className={classes.fieldTextContainer}
                />
              </Grid>
            )}
          />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Grid item xs={12} style={{ paddingBottom: 20 }}>
                <TextField
                  {...field}
                  type='text'
                  placeholder='Mensaje'
                  variant="outlined"
                  id='message'
                  fullWidth
                  multiline={true}
                  rows={6}
                  error={!!errors.message}
                  helperText={errors.message ? errors.message?.message : ''}
                  className={classes.fieldTextContainer}
                />
              </Grid>
            )}
          />
        </Grid>
        <Grid container justify="flex-end">
          <Button type="submit" variant="contained" className={classes.button}>
            ENVIAR
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default Form
