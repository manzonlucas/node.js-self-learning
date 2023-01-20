const express = require('express');
const app = express();
const port = 3000;
const fakeData = require('./fakeData.json');

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/messages', (req, res) => {
  res.send(fakeData);
})