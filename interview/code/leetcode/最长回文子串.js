/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  if (len <= 1) return s;
  let dp = new Array(len).fill(0).map((item) => {
    return new Array(len).fill(null);
  });
  // 初始化
  for (let index = 0; index < len; index++) {
    dp[index][index] = true;
  }
  let max = 1,
    maxIndex = 0;
  // db[i][j] 表示字符串s从i到j子串是否是回文字符串啊
  // j [1, len-1]
  // i [0, len-2]
  const str = s.split('');
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < len - 1 && i < j; i++) {
      if (str[i] !== str[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1;
        maxIndex = i;
      }
    }
  }
  //console.log(dp, max, maxIndex, s.substring(maxIndex, maxIndex+max));
  return s.substring(maxIndex, maxIndex + max);
};
//longestPalindrome('cbbd')
