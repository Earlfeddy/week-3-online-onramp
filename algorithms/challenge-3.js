function binaryReversal(value) {

  let inputBinaryValue = parseInt(value, 10).toString(2);
  let inputBinaryLength = inputBinaryValue.length;

  let byteLen = 8 - (inputBinaryLength % 8);
  let x = 0;

  inputBinaryLength % 8 !== 0 ? inputBinaryValue = new Array(byteLen + 1).join(x) + inputBinaryValue : inputBinaryValue;

  inputBinaryValue = inputBinaryValue.split('').reverse().join('');

  inputBinaryValue = parseInt(inputBinaryValue, 2);

  return inputBinaryValue;
}
console.log(binaryReversal('213'));
console.log(binaryReversal('4567'));


module.exports = binaryReversal
