

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays that are defining the separate lists of chooseable character types
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let allCharacters =[];


// This function will activate when the Generate Password button is clicked. It will then ask the user to input a desired password length
function generatePassword() {
  
  console.log("Generate Password button has been clicked")
  
  let passwordLength = prompt(
    "Please enter the desired length of your password")
  
    console.log(passwordLength)
    ;


    // checks to confirm that desired password length is within acceptable parameters
  
    if(passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    
      alert("Please enter a proper password length between 8 and 128 characters")
    
  } else {
    
    // This function asks the user if they would like to use lowercase characters in their password, responses are displayed in the control log to confirm they are working correctly
  
    let hasLowercase = confirm("Would you like to use lowercase characters?");
    if(hasLowercase){
      allCharacters= allCharacters.concat(lowerCasedCharacters)
  
      console.log(allCharacters)
      console.log("yes to lowercase")
  
    } else if (!hasLowercase) {
      
      console.log("no to lowercase")
    };
    
    // This function asks the user if they would like to use upppercase characters in their password, responses are displayed in the control log to confirm they are working correctly
  
    let hasUppercase = confirm("Would you like to use uppercase characters?")
    if (hasUppercase){
      allCharacters=allCharacters.concat(upperCasedCharacters)
  
      console.log(allCharacters)
      console.log("yes to uppercase")
  
    } else if (!hasUppercase) {
      
      console.log("no to uppercase")
    };
    
    // This function asks the user if they would like to use special characters in their password, responses are displayed in the control log to confirm they are working correctly

    let hasSpecialCharacters = confirm("Would you like to use special characters?");
        if (hasSpecialCharacters){
      allCharacters=allCharacters.concat(specialCharacters)
    
      console.log(allCharacters)
      console.log("yes to special characters")
    
    } else if (!hasSpecialCharacters) {
    
      console.log("no to special characters")
    };
    
    // This function asks the user if they would like to use numbers in their password, responses are displayed in the control log to confirm they are working correctly

    let hasNumbers = confirm("Would you like to use numbers?");
    if (hasNumbers){
      allCharacters=allCharacters.concat(numericCharacters)

      console.log(allCharacters)
      console.log("yes to numbers")

    } else if (!hasNumbers) {

      console.log("no to numbers")
    };
    
    console.log("promp worked");

    // This function checks to make sure that the user selected an acceptable number of password character options. If yes then console displays "valid options chosen" message

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

// This function runs the Math.random function against the allCharacters array.  This function returns the randomly selected password.
    let password ="";
    for (let i=0; i<passwordLength; i++){
      password += allCharacters[(Math.floor(Math.random()*allCharacters.length))]
    }
    return password
}

// This function writes the generated password to the #password input
function writePassword() {
  var password= generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// This section adds the event listener to the Generate Password button 
document.getElementById('password').value = '';
generateBtn.addEventListener("click", writePassword);

