// var a = 1;
// console.log(a);

// var a = 1;
// a = 2;
// console.log(a);

// let a = 1;
// a = 2;
// console.log(a);

// let firstName = " ankita ";
// let age = 28;
// let isMarried = true;

// console.log("this person name is" + firstName + "and person age is " + age);

// if (isMarried == true) {
//   console.log(firstName + "is Married");
// }
// if (isMarried == false) {
//   console.log(firstName + "is not married");
// }

// if (isMarried == true) {
//   console.log(firstName + "is Married");
// } else {
//   console.log(firstName + "is not married");
// }

let answer = 0;
//let, var, const, if, else, for

for (let i = 0; i <= 100; i++) {
  answer = answer + i;
}
console.log(answer);

const ages = [21, 22, 25, 26, 28, 29, 60, 40, 52, 81, 41, 100];
const numberOfPeople = ages.length;
for (let i = 0; i < numberOfPeople; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

const allUsers = [
  {
    firstName: "harkirat",
    gender: "male",
  },
  {
    firstName: "raman",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
];
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}

function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}

const value = sum(1, 2);
const value2 = sum(1, 10);
console.log(value);

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}
function displayResult(data) {
  console.log("Result of the sum is : " + data);
}
function displayResultPassive(data) {
  console.log("sum's result is : " + data);
}
const ans = sum(1, 2);
displayResult(ans);
