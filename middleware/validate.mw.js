const yup = require('yup')

const validationSchema = yup.object({
  id: yup.string().required(),
  body: yup.string().required(),
  isDone: yup.boolean().required(),
  createdAt: yup.date().required(),
  
})

module.exports = async (req, res, next) => {
  try {
    req.body = await validationSchema.validate(req.body)
    next()
  } catch (error) {
    res.status(400).send(error.message)
  }
}