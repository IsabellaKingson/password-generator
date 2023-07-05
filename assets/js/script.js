// Assignment code here

function generatePassword() {
  // Declare strings to be added to the character set based on user input
  const num = "0123456789";
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~";
  let charSet = "";

  // Gather user input
  let length = window.prompt(
    "What is the required length of your password?\nEnter a number between 8 and 128:"
  );

  // Redirect user to fulfill program requirements
  while (length == null || length < 8 || length > 128 || isNaN(length)) {
    length = window.prompt(
      "Please enter a valid number.\nWhat is the required length of your password?\nEnter a number between 8 and 128:"
    );
  }

  // Gather user input
  const lowerAns = window.confirm(
    "Would you like your password to contain lowercase letters?\n" +
      lettersLower +
      "\nHit OK to allow or Cancel to restrict:"
  );
  const upperAns = window.confirm(
    "Would you like your password to contain uppercase letters?\n" +
      lettersUpper +
      "\nHit OK to allow or Cancel to restrict:"
  );
  const numAns = window.confirm(
    "Would you like your password to contain?\n" +
      num +
      "\nHit OK to allow or Cancel to restrict:"
  );
  const charAns = window.confirm(
    "Would you like your password to contain special characters?\n" +
      specialChar +
      "\nHit OK to allow or Cancel to restrict:"
  );

  // Add strings to charSet empty string based on user input
  if (lowerAns) {
    charSet += lettersLower;
  }
  if (upperAns) {
    charSet += lettersUpper;
  }
  if (numAns) {
    charSet += num;
  }
  if (charAns) {
    charSet += specialChar;
  }

  // Redirect user to fulfill program requirements
  if (!lowerAns && !upperAns && !numAns && !charAns) {
    window.alert("You must chose at least one character type");
    return generatePassword();
  }

  // Get a random string from the user selected character set for the requested length
  function genRandomString() {
    let charLength = charSet.length;
    let result = "";
    for (var i = 0; i < length; i++) {
      result += charSet.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
  }
  return genRandomString(length);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
