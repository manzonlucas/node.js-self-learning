const express = require('express');
const app = express();
const port = 3000;
const fakeData = require('./fakeData.json');

app.use(express.static(__dirname));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/messages', (req, res) => {
  res.send(fakeData);
})

app.post('/messages', (req, res) => {
  fakeData.push(req.body);
  res.sendStatus(200);
})