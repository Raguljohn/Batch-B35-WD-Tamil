// 1. Find the culprit
// we have use double or single quotes.
alert("I'm JavaScript!"); //I'm JavaScript!

// 2. Find the culprit and invoke the alert

alert("I'm invoked!"); //I'm invoked!

// 3. Explain the below how it works
alert("I'm JavaScript!"); //I'm JavaScript!
// the output will display in dialog box as alert pop on the screen

alert("Hello"); //Hello
// semicolons is not required everywhere in code.
alert(`Wor
 ld`);
// the output will display in dialog box as alert pop on the screen with the gap inbetween in output.
alert(3 + 1 + 2); //6
// the alert can evaluated the value.

// 4. Fix the below to alert Guvi geek
let admin = 9,
  fname = 10.5;
fname = "Guvi";
lname = "geek";
admin = fname + " " + lname;
alert(admin); //Guvi geek

// 5. Fix the below to alert hello Guvi geek

let xname = 10.5;
xname = "Guvi";
lname = "geek";
let name = xname + " " + lname;
alert("hello" + " " + name); //hello Guvi geek

// 6. Fix the below to alert sum of two numbers

let b = prompt("First number?");
let c = prompt("Second number?");
let result = parseInt(a) + parseInt(b);
alert(result);

// 7.If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

var a = "2" > "12";
//Don't touch below this
if (a > 12) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

//using if else  by changing the condition we can get diffused

// 8. How to get the success in console.
let e = prompt("Enter a number?");
//Don't modify any code below this
if ((e = 0)) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}

// 9. How to get the correct score in console.

let value = prompt("How many runs you scored in this ball");
if (value == 4) {
  console.log("You hit a Four");
} else if (value == 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

//10. Fix the code to welcome the Employee

let login = "Employee";
let message =
  login == "Employee"
    ? "greeting"
    : welcome(login == "Director")
    ? "Greetings"
    : welcome(login == "")
    ? "No login"
    : "";
console.log(message);

//11. Fix the code to welcome the boss

let messageRun;
if (null || 2 || undefined) {
  let messageRun = "welcome boss";
} else {
  let messageRun = "Go away";
}
console.log(messageRun);

// 12. Fix the code to welcome the boss

let messageGreet;
let lock = 2;
//Dont change any code below this
if (null || 0 || undefined) {
  messageGreet = "Go away";
} else {
  messageGreet = "welcome";
}
console.log(messageGreet);

// 13. Fix the code to welcome the boss

let messageValue;
let locks = 2;
//Dont change any code below this
if ((locks && 0) || undefined) {
  messageValue = "Go away";
} else {
  messageValue = "welcome";
}
console.log(messageValue);

// 14. Change the code to print

let i = 3;
while (3) {
  console.log(--i);
}

//  15. Change the code to print 1 to 10 in 4 lines

let num = 1;
console.log(num);
num += 1;
console.log(num);
num += 4;
console.log(num);
num += 4;
console.log(num);

// 16. Change the code to print even numbers

for (let num = 2; num <= 20; num += 1) {
  if (num % 2 == 0) {
    console.log(+num);
  }
}

// 17. Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(gifts[i]);
}

// 18. Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if (countdown == 0) {
    console.log("disarm");
  }
}

// 19.Whats the msg printed and why? Guess you answer before running it.
var lemein = 0;
var lemeout = 0;
var msg = " ";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);
