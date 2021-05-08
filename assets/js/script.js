
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//Global variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//Function that stores user input
function getPasswordOptions() {
  //Password length prompt
  var confirmLength = parseInt(prompt("Choose a password length between 8 and 128 characters")); //Set a prompt to confirm length
  while (confirmLength < 8 ||
    confirmLength > 128 ||
    isNaN(parseInt(confirmLength))) {
    alert("Please choose a number between 8-128");
    var confirmLength = parseInt(prompt("Choose a password length between 8 and 128 characters"));
  };

  //Password Choosing Characters (Declare the variables)
  var confirmUpperCase = confirm("Do you want upper-case letters?");
  var confirmLowerCase = confirm("Do you want lower-case letters?");
  var confirmNumbers = confirm("Do you want numbers?");
  var confirmSpecialCase = confirm("Do you want any special characters?");
  

};

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
