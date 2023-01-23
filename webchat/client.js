const sendBtn = document.querySelector('#sendBtn');
const chatContainer = document.querySelector('#chatContainer');
const ul = document.createElement('ul');
chatContainer.appendChild(ul);
const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputMsg = document.querySelector('#msg');

let messages = [];
const baseURL = 'http://localhost:3000';

const socket = io();

async function getMessages() {
  try {
    const response = await fetch(`${baseURL}/messages`);
    const data = await response.json();
    messages = data;
  }
  catch (err) {
    console.log(err);
  }
}

function setChat() {
  messages.forEach(message => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${message.name}:</b> ${message.message}`;
    ul.appendChild(li);
  })
}

window.addEventListener("load", async () => {
  await getMessages()
  setChat();
})

async function sendMessage(e) {
  e.preventDefault();
  const payload = {
    name: inputName.value,
    message: inputMsg.value
  }

  try {
    await fetch(`${baseURL}/messages`, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  }
  catch (err) {
    console.log(err);
  }
}

form.addEventListener('submit', sendMessage);