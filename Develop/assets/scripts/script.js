
  

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

function generatePassword() {

  //prompted for length of password between 8 and 128 characters
  var lenPass = "";
  console.log(lenPass);

  while (isNaN(parseInt(lenPass)) || parseInt(lenPass) < 8 || parseInt(lenPass) > 128) {
    lenPass = prompt("Please enter the length of password");
  } 

  //Converting user input from string to integer
  parseInt(lenPass, 10); 
  parseInt(lenPass, 10) < 8;
  parseInt(lenPass, 10) > 128;

  // Create variable that will store user input

  // Prompts after clicking "generate button"

  var lowCase = confirm("Do you want lowercase letters?");

  var uppCase = confirm("Do you want uppercase letters?");

  var numbers = confirm("Do you want numbers?");

  var specSym = confirm("Do you want special characters?");

  // If user doesn't choose any options
  while (!lowCase && !uppCase && !numbers && !specSym) {
    lowCase = confirm("Do you want lowercase letters?")
    uppCase = confirm("Do you want uppercase letters?");
    numbers = confirm("Do you want numbers?");
    specSym = confirm("Do you want special characters?");
  }

  //creating variable to collect user choices
  var charSets = "";

  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNum = "0123456789";
  var CharSym = "\\!#$%&()*+,-./:<=>?@[]^_`{|}~\'";

  // adding lower case letters
  if (lowCase) {
    charSets += charLower;
  }
  console.log(charSets);

  // adding upper case letters
  if (uppCase) {
    charSets += charUpper;
  }
  console.log(charSets);

  // adding numbers
  if (numbers) {
    charSets += charNum
  }
  console.log(charSets);

  // adding symbols
  if  (specSym) {
    charSets += CharSym;
  }
  console.log(charSets);
  var randomPass = "";

  // Create a for loop to generate a random password for user 
  for (var i = 0; i < lenPass; i++) {
  // randomly select password for user bases on choices given
  var random = Math.floor(Math.random()  * charSets.length)

  console.log(charSets[random]);
  randomPass += charSets[random];
  } 
  return randomPass
  console.log(randomPass);
}