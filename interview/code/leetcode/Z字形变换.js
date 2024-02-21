/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//   const mapArr = (new Array(numRows).fill(0)).map(item=>[]);
//   let i=0,j=0;
//   let curi = 0;
//   let isDown = true;
//   while(curi<=s.length){

//     while(i<numRows && isDown){
//       mapArr[i][j] = s[curi];
//       i++;
//       curi++;
//     }
    
//      while (i >0 && !isDown) {
//        i--;
//        j++;
//        mapArr[i][j] = s[curi];
       
//        curi++;
//      }

//      if(i>numRows-1) i=numRows-1;
//      if(i===0) i=1;
//      isDown = !isDown;

//   }
//   const str = mapArr.map(item=>item.join('')).join('')
//   return str;
// };

var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const mapArr = new Array(numRows).fill(0).map((item) => []);
  console.log(mapArr);
  let i = 0;
  let k = -1;
  for (const char of s) {
    console.log(i, numRows - 1);

    mapArr[i].push(char);

    if (i===0 || i === numRows - 1) {
      k = -k;
    }
    i += k;

  }
  const str = mapArr.flat().join('');
  console.log(str)
    return str;
};

convert('PAYPALISHIRING', 3);
