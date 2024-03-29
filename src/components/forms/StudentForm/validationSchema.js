import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('What\'s his/her name?')
    .matches(/[a-z\A-Z\.\s]+/, 'No special characters, please!'),
  grade: Yup.number()
    .required('Grade?')
    .min(1, 'Too small!')
    .max(12, 'Too big!'),
})

export default validationSchema
