const oneAway = (word1: string, word2: string) => {
  let hasChanged = false;
  if (Math.abs(word1.length - word2.length) > 1) return false; // test insert/remove;

  for (let i = 0, j = 0; i < Math.max(word1.length, word2.length); i++, j++) {
    if (word1[i] === word2[j]) continue;
    if (hasChanged) return false;
    hasChanged = true;
    // check if the change is a remove/insert;
    if (word1[i + 1] === word2[j]) i++;
    if (word1[i] === word2[j + 1]) j++;
  }
  return true;
}

console.log('pale, ale (true): ', oneAway('pale', 'ale'));
console.log('pales, pale (true): ', oneAway('pales', 'pale'));
console.log('pale, bale (true): ', oneAway('pale', 'bale'));
console.log('pale, bake (false): ', oneAway('pale', 'bake'));
console.log('pale, ake (false): ', oneAway('pale', 'ake'));
console.log('pale, akes (false): ', oneAway('pale', 'akes'));