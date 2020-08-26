const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to my web')
})

app.get('/about', (req, res) => {
  res.send('about wwkkww')
})

app.listen(3000, () => console.log('server started at port 3000'))
