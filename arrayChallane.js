function WordSplit([word, dictionary]) {
    dictionary = new Set(dictionary.split(","));
    for (let i = 0; i < word.length; i++) {
      if (dictionary.has(word.slice(0, i)) && dictionary.has(word.slice(i))) {
        return true;
      }
    }
    return false;
}