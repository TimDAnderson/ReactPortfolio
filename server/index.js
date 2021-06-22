const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
var path = require('path');
// var morgan = require('morgan');

// app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./public'))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`portfolio app listening at http://localhost:${port}`)
})