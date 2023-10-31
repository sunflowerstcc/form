// Obtenha o formulário e adicione um ouvinte para o evento de envio
const nome = document.querySelector("#nome").value;
const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const senha = document.querySelector("#senha").value;


document.querySelector("form").addEventListener("submit", sendForm);

function sendForm(e) {
  e.preventDefault()  
  const name = document.querySelector("#nome").value;
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  var nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/
  var senhaRegex = /^[\w!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",.<>/?\\|]*$/
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  var usernameRegex = /^[A-Za-z0-9_]*$/

  if (!nomeRegex.test(name)) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (!usernameRegex.test(username)) {
    alert("Por favor, insira um nome de usuário válido.");
    return;
  }
  

  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de email válido.");
    return;
  }
  if (!senhaRegex.test(senha)) {
    alert("Por favor, insira uma senha válida.");
    return;
  }


  var url = 'https://api.sheetmonkey.io/form/7ZEpaCEN27L69gkWNjZW3P'

  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, username,email, senha})
  }).then(()=>  window.location.replace('obrigado.html'))
 
}