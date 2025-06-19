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
  const userEmail = document.querySelector("#userEmail"); //Henter selve input-elementet
  const userPassword = document.querySelector("#userPassword");
  const viewPassword = document.querySelector("#viewPassword");
  const rememberMe = document.querySelector("#rememberMe");
  const loginDisplay = document.querySelector("#loginDisplay"); // Henter div-elementet 
  console.log(userEmail, userPassword, viewPassword, rememberMe, loginDisplay);

  //Modifiser
  const emailValue = userEmail.value; //Henter verdien inni elementet
  const passwordValue = userPassword.value; 
  const emailDisplay = document.createElement("p"); //Lager vi et nytt p-element
  emailDisplay.textContent = emailValue; //Gir vi nytt element innhold som er verdi fra input
  const passwordDisplay = document.createElement ("p");
  passwordDisplay.textContent = passwordValue;
  const viewValue= viewPassword.checked;
  console.log(viewValue + "Passordet er synlig");
  const loginValue = rememberMe.checked; 
  console.log(loginValue + " Innloggingen din er lagret");

  //Send
  console.log("Din epost adresse er: " + emailValue + ".");
  console.log(`Ditt passord er: ${passwordValue}.`);
  loginDisplay.appendChild(emailDisplay); // Gir div-element det nye p-elementet med innhold. 
  loginDisplay.appendChild(passwordDisplay);
});