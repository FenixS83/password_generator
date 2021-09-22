

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets
var specialCharaters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let allCharacters ="";


// Generate Password function
function generatePassword() {
  console.log("Generate Password button has been clicked")
  let passwordLength = prompt(
    "Please enter the desired length of your password")
    console.log(passwordLength)
    ;


  // Password length query
  if(passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("Please enter a proper password length between 8 and 128 characters")
  } else {
    
    // Lowercase query
    let hasLowercase = confirm("Would you like to use lowercase characters?");
    if(hasLowercase){
      allCharacters += lowerCasedCharacters
      console.log("yes to lowercase")
    };
    
// Uppercase query
    let hasUppercase = confirm("Would you like to use uppercase characters?")
    if (hasUppercase){
      allCharacters += upperCasedCharacters
      console.log("yes to uppercase")
    };
    
    // Special characters query
    let hasSpecialCharacters = confirm("Would you like to use special characters?");
    if (hasSpecialCharacters){
      allCharacters += specialCharaters
      console.log("yes to special characters")
    };
    
    // Numbers query
    let hasNumbers = confirm("Would you like to use numbers?");
    if (hasNumbers){
      allCharacters += numericCharacters
      console.log("yes to numbers")
    };
    
    console.log("promp worked");

    // If all options equal false
    if (
      hasLowercase === false &&
      hasUppercase === false &&
      hasSpecialCharacters === false &&
      hasNumbers=== false
      ) {
      alert("Please select at least one character type.");
      generatePassword();
      } else (console.log("valid options chosen"))
      }
// Selecting random characters
    let password ="";
    for (let i=0; i<passwordLength; i++){
      password = allCharacters[(Math.floor(Math.random()*allCharacters.passwordLength))]
    }
    return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
  passwordText.value = password;

}

document.getElementById('password').value = '';
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

