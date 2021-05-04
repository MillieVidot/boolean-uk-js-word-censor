const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // Our program takes in text, a list of words to censor,
  // what to censor them with (****, BEEP, xxx, !!!, etc),
  // and it returns a censored version of the text.

  // - turn the string of "text" into an array of strings (make this a copy not delete orig string)
textArray = text.split(' ')
console.log(textArray)

// - make an array of strings of 'words to censor'
badWordsArray = ["ipsum", "commodo", "commodo", "elit,", "veniam,"]
// console.log(wordsToCensor)

// - make the function compare each word in textArray to each word in wordsToCensorArray
// - locate every word in textArray that === any word in wordsToCensor array

for(const badWord of badWordsArray) {
  censor(textArray, badWord)
}

function censor(badText, badWord) {
for(const word of badText) {
    if (word === badWord) {
      const index = badText.indexOf(word)
      badText[index] = "BLEEP"
    }
  }
}

console.log(textArray)

noOfBleeps = null
for (const bleep of textArray) {
  if (bleep === "BLEEP") {
    noOfBleeps += 1
  }
}
console.log(`Number of obcenities = `, noOfBleeps)


 


// - replace the words with BEEP
// - output the newCensoredArray 
// - input textArray and wordsToCensorArray into the function
// - join all strings in newCensoredArray into one string?
// - print string result to console.log
