//Global variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];

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

  //While loop that confirms our characters
  while (confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmNumbers === false &&
    confirmSpecialCase === false) {
    alert("Please choose a character for your password");
    var confirmUpperCase = confirm("Do you want upper-case letters?");
    var confirmLowerCase = confirm("Do you want lower-case letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecialCase = confirm("Do you want any special characters?");
    return;
  };

  //Object to store user inputs
  var passwordOptions = {
    length: confirmLength,
    upperCase: confirmUpperCase,
    lowercase: confirmLowerCase,
    numbers: confirmNumbers,
    special: confirmSpecialCase
  };
  return passwordOptions;
};

// Function that gets random element from my array
function getRandomElement(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  return element;
};

// Function that generates the password
function generatePassword() {
  var pwdOptions = getPasswordOptions();
  var newPasswordArray = [];
  var possibleCharacters = [];
  var characters = [];

  //if statements that concat the possible characters, then push them to getRandomElement()
  if (pwdOptions.upperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    characters.push(getRandomElement(upperCase));
  };
  if (pwdOptions.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    characters.push(getRandomElement(lowerCase));
  };
  if (pwdOptions.numbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    characters.push(getRandomElement(numbers));
  };
  if (pwdOptions.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    characters.push(getRandomElement(specialCharacters));
  };

  //for loop that will generate the random password based off our choices in the prompts above
  for (var i = 0; i < pwdOptions.length; i++) {
    var possibleChar = getRandomElement(possibleCharacters);
    newPasswordArray.push(possibleChar);
  };
  for (var i = 0; i < characters.length; i++) {
    newPasswordArray[i] = characters[i];
  };
  return newPasswordArray.join("");
};

// QuerySelector for the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
