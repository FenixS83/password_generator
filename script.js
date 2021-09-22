// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt("Enter the length of your password");

  if(passwordLength <8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("Please enter a proper password length between 8 and 128 characters")
  }
}



























// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passwordLength = prompt("");
if (!enter){
    alert("Please enter a value")
} else if (passwordLength >= 8 || passwordLength < 128) {
    passwordLength = parseInt(prompt());

  } else {
    confirmhasNumbers = confirm;
    confirmhasSpecialCharacters = confirm;
    confirmhasUppercase = confirm;
    confirmhasLowercase = confirm;
  };

  if (!confirmhasNumbers && !confirmhasSpecialCharacters && !confirmhasUppercase && !confirmhasLowercase) {
    selections = alert("You must choose at least one criteria");

  }

  else if (confirmhasNumbers && confirmhasSpecialCharacters && confirmhasUppercase && confirmhasLowercase)












var passwordLength = prompt("Enter the length of your password. Must be between 8-128 characters");
var hasNumbers = confirm("Would you like to include numbers?")
var hasSpecialCharacters = confirm("Would you like to include special characters?")
var hasUppercase = confirm("Would you like to include uppercase letters?")
var hasLowercase = confirm("Would you like to include lowercase letters?")
var selections;

charSetArray = [];


var specialCharaters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
]

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];



var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];