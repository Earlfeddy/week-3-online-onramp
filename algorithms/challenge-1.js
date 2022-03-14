
function romanToDecimal(roman) {
  key = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

  let result = [];
  for(let i = 0; i < roman.length; i++){
    if(key[roman[i]] < key[roman[i + 1]]){
      //subtract the value
      result.push(key[roman[i + 1]] - key[roman[i]]);
      i++
      continue;
    }else{
      result.push(key[roman[i]]);
    }
  }
  return result.reduce((a, b) => a + b);
}
console.log(romanToDecimal('XI'));
console.log(romanToDecimal('XCVIII'));
console.log(romanToDecimal('XCIX'));
console.log(romanToDecimal('MCMXLIV'));
module.exports = romanToDecimal
 