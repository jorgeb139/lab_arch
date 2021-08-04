import * as yup from 'yup'

const ValidationSchema = yup.object().shape({
  // names: yup.string()
  //   .required('El campo es requerido')
  //   .min(6, 'Debe tener un mínimo de 6 caracteres')
  //   .max(20, 'Debe tener un máximo de 20 caracteres'),
  // message: yup.string()
  //   .required('El campo es requerido')
  //   .min(4, 'Debe tener un mínimo de 4 caracteres')
  //   .max(400, 'Debe tener un máximo de 400 caracteres'),
  // email: yup.string()
  //   .required('El campo es requerido')
  //   .email('Debe ser un email válido')
})

export default ValidationSchema
