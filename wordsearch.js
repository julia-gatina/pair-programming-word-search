// Find a matching word in array of words, even if it spelled backwards

const wordSearch = (letters, word) => {
  let isWordPresent = false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    const reversedl = l.split('').reverse().join('');
    if (l.includes(word) || reversedl.includes(word)) {
      isWordPresent = true;
    }
  }
  return isWordPresent;
};

module.exports = wordSearch;
