const express = require('express');
const newapp = express();
const port = 3000;

newapp.get('/', (req, res) => {
  res.send('Hello World!');
});

newapp.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});