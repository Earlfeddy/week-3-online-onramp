function transpose(arr) {
  let result = [];

  for(let i = 0; i < arr[0].length; i++){
    let col = [];
    for(let j = 0; j < arr.length; j++){
      col.push(arr[j][i]);
    }
    result.push(col)
  }
  return result;
}
console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]));

module.exports = transpose
