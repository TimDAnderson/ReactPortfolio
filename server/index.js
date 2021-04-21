const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`portfolio app listening at http://localhost:${port}`)
})