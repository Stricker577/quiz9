const express = require('express');
const app = express();
const port = 3000;

const { func } = require('./my-function');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/say', (req, res) => {
  const { keyword } = req.query;
  res.send(func(keyword));
});

app.listen(port, () => {
  console.log(`Example app listening at http://192.241.141.66:3000/say?keyword=hello`)
});
