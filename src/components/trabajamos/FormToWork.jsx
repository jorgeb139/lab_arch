/* eslint-disable */
import React, { useState, useEffect } from 'react'
import {
  MenuItem,
  Button, Grid,
  TextField,
  Typography,
  makeStyles,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Swal from 'sweetalert2'

import ValidationSchema from '../../services/ValidationSchema'

const listOfQuestions = 'questionsValues.json'
const listOfAreas = 'checkValues.json'

const valueMarginRight = '30px'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 30
    }
  },
  questionsTextBoxes: {
    paddingBottom: 20,
    paddingRight: valueMarginRight
  },
  containerCheckBoxes: {
    paddingBottom: 15
  },
  buttonContainer: {
    paddingRight: valueMarginRight,
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
    marginBottom: 60,
    height: 50,
    fontSize: '0.9rem',
    borderRadius: 10
  },
  bodyText: {
    color: '#848484'
  },
  questionText:{
    marginBottom: 8,
    marginTop: 10,
  }
}))

const NewCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#FDB0A7',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />)

const FormToWork = () => {
  const classes = useStyles()
  const [questions, setQuestions] = useState([])
  const [checksValues, setChecksValues] = useState([])
  const [checkBoxSelected, setCheckBoxSelected] = useState([])
  const [questionsValues, setQuestionsValues] = useState({})

  useEffect(() => {
    (async () => {
      const elements = await axios.get(listOfQuestions)
      setQuestions(elements.data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const elements = await axios.get(listOfAreas)
      setChecksValues(elements.data)
    })()
  }, [])

  const { handleSubmit, reset, control, formState: { errors } } = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: 'onChange'
  })

  
  const handleChangeCheckBox = (event) => {
    let aux = null
    if (checkBoxSelected.includes(event.target.id)) {
      aux = checkBoxSelected.filter(element => element !== event.target.id)
      delete questionsValues[`${event.target.id}-DropdownValue`]
    } else {
      aux = checkBoxSelected.concat(event.target.id)
      setQuestionsValues({
        ...questionsValues,
        [`${event.target.id}-DropdownValue`]: document.getElementById(`Dropdown${[event.target.id]}`).textContent
      })
    }
    setCheckBoxSelected(aux)
  }
  
  const handleChangeDropdown = (event) => {
    setQuestionsValues({
      ...questionsValues,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = values => {
    console.log('Valores', values)
    setQuestionsValues({
      ...questionsValues,
      values
    })
    Swal.fire({
      title: '¡Muchas gracias!',
      text: 'Analizaremos tu propuesta y nos comunicaremos contigo en el tiempo dado',
      icon: 'success',
      confirmButtonText: 'Excelente'
    })
    reset({})
    setQuestionsValues({})
    setCheckBoxSelected([])
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          {questions.map((question) => {
            const nombre = question.name
            return (
              <Controller
                key={question.id}
                name={nombre}
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <Grid item xs={12} md={6} className={classes.questionsTextBoxes}>
                    <Typography variant='body1' className={classes.questionText}>
                      {question.title}
                    </Typography>
                    <TextField
                      {...field}
                      type={question.type}
                      placeholder={question.placeholder}
                      variant="outlined"
                      id={question.id}
                      fullWidth
                      error={!!errors[nombre]}
                      helperText={errors[nombre] ? errors[nombre]?.message : ''}
                    />
                  </Grid>
                )}
              />
            )
          })}
        </Grid>
        <Controller
          name='direction'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className={classes.questionsTextBoxes}>
              <Typography variant='body1' className={classes.questionText}>
                ¿Dónde queda el terreno?
              </Typography>
              <TextField
                {...field}
                type='text'
                placeholder="Región, comuna, calle, número."
                variant="outlined"
                id='q_direction'
                fullWidth
                error={!!errors.direction}
                helperText={errors.direction ? errors.direction?.message : ''}
              />
            </div>
          )}
        />
        <div>
          <Typography style={{ paddingBottom: 25}} variant='body1'>
            Cuéntanos ¿Cuáles y cuántas áreas tendrá tu proyecto?
          </Typography>
        </div>
        <Grid container className={classes.containerCheckBoxes}>
          <Controller
            name="checkboxes"
            control={control}
            render={props =>
              checksValues.map((checkValue) => (
                <Grid item xs={12} md={6} key={checkValue.id} className={classes.containerCheckBoxes}>
                  <Grid container>
                    <Grid item xs={8} md={8}>
                      <FormControlLabel
                        key={checkValue.id}
                        label={checkValue.label}
                        control={<NewCheckbox
                          checked={checkBoxSelected.includes(checkValue.id)}
                          id={checkValue.id}
                          onChange={handleChangeCheckBox}
                        />}
                      />
                    </Grid>
                    <Grid item xs={2} md={2}>
                      <FormControl variant="outlined" >
                        <Select
                          id={`Dropdown${checkValue.id}`}
                          name={checkValue.id + '-DropdownValue'}
                          defaultValue="1"
                          onChange={handleChangeDropdown}
                          disabled = { !checkBoxSelected.includes(checkValue.id) }
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            }
          />
          <Controller
            name='details'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <div className={classes.questionsTextBoxes}>
                <Typography variant='body1' className={classes.questionText}>
                  Cuéntanos lo más detallado posible sobre tu proyecto, así podremos presentarte una mejor propuesta.
                </Typography>
                <TextField
                  variant="outlined"
                  multiline={true}
                  rows={6}
                  fullWidth
                  id="textDetalles"
                  placeholder="Entre más detalles, mejor para nosotros.."
                />
              </div>
            )}
          />
        </Grid>
        <div className={classes.buttonContainer}>
          <Button type="submit" variant="contained" fullWidth className={classes.button}>
            ENVIAR FORMULARIO
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormToWork
