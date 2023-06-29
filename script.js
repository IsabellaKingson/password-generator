// Assignment code here

function generatePassword() {
  let length = Number(
    window.prompt(
      "What is the required length of your password?\nEnter a number between 8 and 128:"
    )
  );
  while (length == null || length < 8 || length > 128) {
    length = Number(
      window.prompt(
        "Please enter a valid number.\nWhat is the required length of your password?\nEnter a number between 8 and 128:"
      )
    );
  }
  let charSet = "";
  const num = "0123456789";
  const numAns = window.confirm(
    "Would you like your password to contain?\n" +
      num +
      "\nHit OK to allow or Cancel to restrict:"
  );
  if (numAns === true) {
    charSet = charSet.concat(num);
  }
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  const lowerAns = window.confirm(
    "Would you like your password to contain lowercase letters?\n" +
      lettersLower +
      "\nHit OK to allow or Cancel to restrict:"
  );
  if (lowerAns === true) {
    charSet = charSet.concat(lettersLower);
  }
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperAns = window.confirm(
    "Would you like your password to contain uppercase letters?\n" +
      lettersUpper +
      "\nHit OK to allow or Cancel to restrict:"
  );
  if (upperAns === true) {
    charSet += lettersUpper;
  }
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~";
  const charAns = window.confirm(
    "Would you like your password to contain special characters?\n" +
      specialChar +
      "\nHit OK to allow or Cancel to restrict:"
  );
  if (charAns === true) {
    charSet = charSet.concat(specialChar);
  }
  function genRandomString(length) {
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
