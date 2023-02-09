// Assignment code here
var lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsChar = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?");

  if ((passwordLength, 8 || passwordLength > 128)) {
    alert("Must be at least 8 characters and no more than 128 characters.");
    return null;
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("Would you like lowercase letters in your password?");
  var uppercase = confirm("Would you like uppercase letters in your password?");
  var numbers = confirm("Would you like numbers letters in your password?");
  var symbols = confirm("Would you like symbols letters in your password?");

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  if (
    lowercase === false &&
    uppercase === false &&
    numbers === false &&
    symbols === false
  ) {
    alert("Must choose at least one character type");
    return null;
  }
  console.log(lowercase, uppercase, numbers, symbols);

  var passwordLibrary = [];
  if (uppercase) {
    passwordLibrary = passwordLibrary.concat(uppercaseChars);
  }
  if (lowercase) {
    passwordLibrary = passwordLibrary.concat(lowercaseChars);
  }
  if (numbers) {
    passwordLibrary = passwordLibrary.concat(numbersChars);
  }
  if (symbols) {
    passwordLibrary = passwordLibrary.concat(symbolsChars);
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter =
      passwordLibrary[Math.floor(Math.random() * passwordLibrary.length)];
    generatedPassword = generatedPassword + randomCharacter;
  }

  return generatePassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
