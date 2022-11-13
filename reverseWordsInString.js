function reverseWords(s) {
    const ret = [];
    let word = [];
    for (let i = 0; i < s.length; ++i) {
      if (s.charAt(i) === ' ') {
          word.length > 0 && ret.unshift(word.join(''));
          word = [];
        }
      else {
        word.push(s.charAt(i));
      }
    }
    word.length > 0 && ret.unshift(word.join(''));
    return ret.join(' ');
 
};