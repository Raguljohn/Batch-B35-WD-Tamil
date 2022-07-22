// 1. Write a code to print the numbers in the array
// Output: 1234567891011
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var finalNum = array.join("");
console.log(finalNum);

// 2. Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11

var simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let fullString = simpleArray.join(",");
console.log(fullString);

// 3. Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " ";

for (var i = 11; i > 0; i--) {
  new_string += numsArr2[i];
}
console.log(new_string.trim());

// 5. Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <= 11; i++) {
  if (i % 2 == 0) {
    console.log('"even"' + " " + i);
  }
}

// 6. Write a code to add all the numbers in the array
// Output: 66

var arrayAdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let numAdd = 0;
for (i = 0; i <= arrayAdd.length; i++) {
  numAdd += arrayAdd[i];
  console.log(numAdd);
}

// 7. Write a code to add the even numbers only
// Output: 30

let numsArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const sumEvens = (numsArr5) => {
  let sum = 0;
  for (let i = 0; i < numsArr5.length; i++) {
    if (numsArr5[i] % 2 === 0) {
      sum = sum + numsArr5[i];
    }
  }
  return sum;
};

console.log(sumEvens(numsArr5));

// 8. Write a code to add the even numbers and subract the odd numbers
// Output: 94

var numsArr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2 = 100;
for (var i = 0; i <= 10; i++) {
  if (numsArr8[i] % 2 == 0) {
    sum2 += numsArr8[i];
  } else {
    sum2 -= numsArr8[i];
  }
}
console.log(sum2);

// 9.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

// 10. Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
var ArrayNum1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";
for (var i = ArrayNum1.length - 1; i >= 0; i--) {
  var inner_array = ArrayNum1[i];
  for (var j = inner_array.length - 1; j >= 0; j--)
    str_all += ArrayNum1[i][j] + "";
}
console.log(str_all);

// 11. Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

var ArrayNum = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (var j = 0; j < inner_array.length; j++) {
    if (numsArr[i][j] % 2 != 0) {
      sum_odd += numsArr[i][j];
    } else {
      sum_even += numsArr[i][j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);
