const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const fakeData = require('./fakeData.json');

app.use(express.static(__dirname));
app.use(express.json());

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.get('/messages', (req, res) => {
  res.send(fakeData);
})

app.post('/messages', (req, res) => {
  fakeData.push(req.body);
  res.sendStatus(200);
})