import * as yup from 'yup'

const ValidationSchema = yup.object().shape({
  // names: yup.string()
  //   .required('El campo es requerido')
  //   .min(6, 'Debe tener un mínimo de 6 caracteres')
  //   .max(20, 'Debe tener un máximo de 20 caracteres'),
  // email: yup.string()
  //   .required('El campo es requerido')
  //   .email('Debe ser un email válido'),
  // materiality: yup.string()
  //   .required('El campo es requerido')
  //   .min(4, 'Debe tener un mínimo de 4 caracteres')
  //   .max(15, 'Debe tener un máximo de 15 caracteres'),
  // typeEdification: yup.string()
  //   .required('El campo es requerido')
  //   .min(3, 'Debe tener un mínimo de 3 caracteres')
  //   .max(15, 'Debe tener un máximo de 15 caracteres'),
  // sqrMt: yup.number('Solo se aceptan números')
  //   .required('El campo es requerido')
  //   .min(4, 'Debe tener mínimo de 4 metros cuadrados')
  //   .max(10000, 'Debe tener un máximo de diez mil metros cuadrados'),
  // phone: yup.string()
  //   .required('El campo es requerido')
  //   .min(6, 'Debe tener mínimo de 6 números')
  //   .max(12, 'Debe tener un máximo de 12 números'),
  // direction: yup.string()
  //   .required('El campo es requerido')
  //   .min(5, 'Debe tener un mínimo de 5 caracteres')
  //   .max(20, 'Debe tener un máximo de 20 caracteres'),
  // details: yup.string()
  //   .required('El campo es requerido')
  //   .min(20, 'Debe tener un mínimo de 20 caracteres')
  //   .max(250, 'Debe tener un máximo de 250 caracteres')
})

export default ValidationSchema
