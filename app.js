const express = require('express')
const cors = require("cors")
const routes = require('./routes/pointsdb')
const app = express()
const path = require('path');
const port = 9009
app.use(express.json())
app.use(cors({origin:"*"}))
app.use(routes)

app.get('/', (req, res) => {
  res.res("Helo World")
})
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})
