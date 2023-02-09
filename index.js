let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let passwordOne = [];
let passwordTwo = [];


// generate random character & add to password array
function randomCharacter() {
  let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
  let character1 = Math.floor(Math.random() * characters.length)
  passwordOne.push(characters[character1])
  let character2 = Math.floor(Math.random() * characters.length)
  passwordTwo.push(characters[character2])

}

// generate random character 15 times
function generatePassword(characterLengthInput) {
  if (characterLengthInput === "") {
    for (let i = 0; i < 6; i++){
      randomCharacter()
    }
  } else {
    for (let i = 0; i < characterLengthInput; i++){
      randomCharacter()
    }
  }
}

// .join array to form string and update html element
function generatePasswords() {
  passwordOne = []
  passwordTwo = []
  let characterLengthInput = document.getElementById("character-length").value

  generatePassword(characterLengthInput)
  password1El.textContent = passwordOne.join("")
  password2El.textContent = passwordTwo.join("")
}
