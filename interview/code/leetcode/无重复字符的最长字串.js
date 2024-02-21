/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let length = 0;

  let substr = new Set();
  let i = 0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    while(substr.has(element)){
      substr.delete(s[i++]);
    }
    substr.add(element);
    length = Math.max(substr.size, length)
  }
  return length
  console.log(length)

};

lengthOfLongestSubstring('pwwkew');
