const usernameinput = document.getElementById('username')
const pswinput = document.getElementById('password')
const loginbtn = document.getElementById('loginbtn')

usernameinput.addEventListener('input', function() {

if (usernameinput.value === '') {
    alert('Por favor, insira um nome de usuário.');
    return;
  }
});


pswinput.addEventListener('input', function() {
if (pswinput.value === '') {
    alert('Por favor, insira uma senha.');
    return;
  }});


loginbtn.addEventListener('click', function() {
    const username = usernameinput.value;
    const password = pswinput.value;

    if (username === '') {
    alert('Por favor, insira um nome de usuário.');
    return;
  };
  if (password === '') {
    alert('Por favor, insira uma senha.');
    return;
  };

});