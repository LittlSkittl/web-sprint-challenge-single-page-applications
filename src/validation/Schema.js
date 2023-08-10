import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Enter a name for the order')
    .min(2, 'name must be at least 2 characters'),
  size: yup
    .string()
    .required('Please select a size'),
  pepperoni: yup
    .boolean(),
  olives: yup
    .boolean(),
  bbq: yup
    .boolean(),
  chicken: yup
    .boolean(),
  sausage: yup
    .boolean(),
  specialInstructions: yup
    .string()

})

export default schema