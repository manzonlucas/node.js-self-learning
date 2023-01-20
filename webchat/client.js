const sendBtn = document.querySelector('#sendBtn');
const chatContainer = document.querySelector('#chatContainer');
let messages = [];

sendBtn.addEventListener("click", () => {
  fetch('http://localhost:3000/messages')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      messages = data;
    })
  setChat();
})

// function setChat() {
//   messages.forEach(message => {
//     chatContainer.innerHTML += message.message
//   })
// }