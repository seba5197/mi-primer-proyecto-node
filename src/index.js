
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const router = require('./router')
const PORT = process.env.PORT || 3000
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(morgan('dev'))
app.use(router)
app.get('/', (req, res) => {
  res.render('home')
})

console.log(path.join(__dirname, 'views'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
