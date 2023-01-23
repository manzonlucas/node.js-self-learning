const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const mongoose = require('mongoose');
// dbURL, where first 'user' is the user, and 2nd one is the password.
// in this case we are logging in with: user: user, pass: user.
const dbURL = 'mongodb+srv://user:user@learning-node.vbpuzae.mongodb.net/?retryWrites=true&w=majority';
const Message = require('./models/Message');

const fakeData = require('./fakeData.json');

app.use(express.static(__dirname));
app.use(express.json());

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

mongoose.set('strictQuery', true);
mongoose.connect(dbURL);

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => res.send(messages));
})

app.post('/messages', (req, res) => {
  const message = new Message(req.body);
  message.save()
    .then(() => {
      io.emit('message', req.body);
      res.sendStatus(200);
    })
    .catch(err => {
      sendStatus(500);
      return console.log(err);
    })
})