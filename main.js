var logInButton  = document.querySelector('.logInButton')
var userNameInput = document.querySelector('.user-name')
var sideBarButton = document.querySelector('.side-bar-button')
var nameDisplay = document.querySelector('.display-name')
var leftNav = document.querySelector('.left-nav')

logInButton.addEventListener('click', displayName)
sideBarButton.addEventListener('click', displaySideBar)


function displayName() {
  console.log('hello')
  nameDisplay.innerText = `Hello, ${userNameInput.value}!`

}

function displaySideBar(){
  console.log('HEYYYYY')
  leftNav.classList.toggle('hidden')
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
