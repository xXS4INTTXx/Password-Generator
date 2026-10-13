/* Character Sets */
const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const type = [upperLetters, lowerLetters, numbers, symbols];
let generateButton = document.getElementById("generateBtn");
let passwordDisplay1 = document.getElementById("Password1");
let passwordDisplay2 = document.getElementById("Password2");
let error = document.getElementById("errorMessage");
/* Core Functionality */
function generate () {
    let passwordLength = Number(document.getElementById('pwLength').value);
    let incSymbols = document.getElementById("includeSymbols").checked;
    let incNumbers = document.getElementById("includeNumbers").checked;
    let incUppercase = document.getElementById("includeUppercase").checked;
    let incLowercase = document.getElementById("includeLowercase").checked;
    let pass1 = "";
    let pass2 = "";
    let characters = [];
    let noTypeSelected = !incLowercase && !incUppercase && !incNumbers && !incSymbols;
    let noLength = !passwordLength;
    if (noTypeSelected && noLength) {
        error.textContent = "Please select at least one character type and enter a password length.";
        return;
    } else if (noTypeSelected) {
        error.textContent = "Please select at least one character type.";
        return;
    } else if (noLength) {
        error.textContent = "Please enter a password length.";
        return;
    }
    if (incLowercase) { characters = characters.concat(lowerLetters); }
    if (incUppercase) { characters = characters.concat(upperLetters); }
    if (incNumbers) { characters = characters.concat(numbers); }
    if (incSymbols) { characters = characters.concat(symbols); }
    for (let i = 0; i<passwordLength; i++) {
        pass1 += characters[Math.floor(Math.random() * characters.length)];
        pass2 += characters[Math.floor(Math.random() * characters.length)];
    }
    error.textContent = "";
    passwordDisplay1.textContent = pass1;
    passwordDisplay2.textContent = pass2;
}