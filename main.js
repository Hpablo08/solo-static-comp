var logInButton  = document.querySelector('.logInButton')
var userNameInput = document.querySelector('.user-name')
var nameDisplay = document.querySelector('.display-name')

logInButton.addEventListener('click', displayName)

function displayName() {
  console.log('hello')
  nameDisplay.innerText = `Hello, ${userNameInput.value}!`

}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
