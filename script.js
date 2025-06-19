// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector("#hamburgerIcon");
//console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector("#navList");
  //console.log(navList);

  navList.classList.remove("hidden");
  navList.classList.add("navList");
});

const sunIcon = document.querySelector("#sunIcon");
//console.log(sunIcon);

sunIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("light");
  body.classList.add("dark");
});

//
//
//starte med button//

const loginButton = document.querySelector("#loginButton");
console.log(loginButton);

loginButton.addEventListener("click", function(event){
  event.preventDefault();
  console.log("Button clicked");
  
  //Hent
  const userEmail = document.querySelector("#userEmail");
  const userPassword = document.querySelector("#userPassword");
  const viewPassword = document.querySelector("#viewPassword");
  const rememberMe = document.querySelector("#rememberMe");
  console.log(userEmail, userPassword, viewPassword, rememberMe);

  //Modifiser
  const emailValue = userEmail.value;
  const passwordValue = userPassword.value; 

  //Send
  console.log("Din epost adresse er: " + emailValue + ".");
});