function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
