function reverseArray(arr) {
  var newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr.push(arr[arr.length - i]);
  }
  return newArr;
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
