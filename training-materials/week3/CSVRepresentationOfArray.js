const input = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];
const output =
  "0,1,2,3,4\n" + "10,11,12,13,14\n" + "20,21,22,23,24\n" + "30,31,32,33,34";

function separate(arr) {
  let tmp = "'";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == arr[i].length - 1) {
        tmp = tmp + arr[i][j];
      } else {
        tmp = tmp + arr[i][j] + ",";
      }
    }
    if (i == arr.length - 1) {
      tmp = tmp + "'" + "\n" + " ";
    } else {
      tmp = tmp + "'" + "\n" + " " + "+" + " " + "'";
    }
  }
}
separate(input);

console.log("expected output", output);
