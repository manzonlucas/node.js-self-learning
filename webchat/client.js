const sendBtn = document.querySelector('#sendBtn');
const chatContainer = document.querySelector('#chatContainer');
const ul = document.createElement('ul');
chatContainer.appendChild(ul);

let messages = [];
const baseURL = 'http://localhost:3000';

window.addEventListener("load", async () => {
  try {
    const response = await fetch(`${baseURL}/messages`);
    const data = await response.json();
    messages = data;
    setChat();
  }
  catch (err) {
    console.log(err);
  }
})

function setChat() {
  messages.forEach(message => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${message.name}:</b> ${message.message}`;
    ul.appendChild(li);
  })
}

async function sendMessage(msg) {
  try {
    const response = await fetch(`${baseURL}/messages`);
    const data = await response.json();
    messages = data;
    setChat();
  }
  catch (err) {
    console.log(err);
  }

}