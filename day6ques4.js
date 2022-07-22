// 1.Fix the code to get the largest of three.

aa = (f, s, t) => {
  if (f >= s && f >= t) {
    console.log(f);
  } else if (s >= f && s >= t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

// 2. Fix the code to Sum of the digits present in the number

function add(m) {
  let n = (1, 2, 3);
  for (var i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(n[i]);
  return sum;
}

// 3. Fix the code to Sum of all numbers using IIFE function

const num = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
  let sum = 0;

  function add(a, b, c, d, e, f, g, h) {
    return a + b + c + d + e + f + g + h;
  }

  console.log(add(9, 8, 5, 6, 4, 3, 2, 1));
})();

//    4. Fix the code to gen Title caps.

// var arr = ["guvi", "geek", "zen", "fullstack"];
//   var string = (text)=>{
//    text=text.toLowerCase().split('');
//    for(var i=0;i<text.length;i++){
//     text[i]=text[i],CharAt(0).toUpperCase()+text[i].slice(1);
//     }
//     return text.join('');
//   }
//   console.log(string("guvi”, “geek”, “zen”, “fullstack"));

//   5. Fix the code to return the Prime numbers

const array = [1, 3, 2, 5, 10];
const primeNum = array.filter((array) => {
  for (let i = 2; i <= array.length; i++) {
    if (array % 2 === 0) {
      return true;
    }
  }
  return array === 1;
});
console.log(primeNum);

//  6.Fix the code to sum the number in that array

const arrayNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sumNum = (a, b) => a + b;
for (var i = 0; i <= arrayNum.length; i++);
const sum1 = arrayNum.reduce(sumNum);
console.log(sum1);

// 7. Fix the code to rotate an array by k times and return rotated array using

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function () {
  out = arr.slice(k + 1, arr.length);
  var count = out.length;
  for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
  }
  console.log(out);
})();

// 8.Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
for (var i = 0; i <= arr.length; i++) {
  (function () {
    console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
  });
}

// 9.print all odd numbers in an array using IIFE function

var nums = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
var odd = [];
var oddNumbers = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      odd.push(nums[i]);
      console.log(odd);
    } else {
      even.push(nums[i]);
      console.log(even);
    }
  }
};
oddNumbers(nums);

// 10. Fix the code to reverse.

(function(str){
    str1 = str.split('').reverse().join('');
    console.log(str1 + "abcd"); 
   })()

