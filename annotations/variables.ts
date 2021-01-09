// Assign type of number to the variable
let apples: number = 5;

// Assign type of string to the variable
let speed: string = 'fast';

// Assign type of boolean to the variable
let hasName: boolean = true;

// Assign type of null to the variable
let nothingMuch: null = null;

// Assign type of undefined to the variable
let nothing: undefined = undefined;

// Assign type of Date - built in object - to the variable
let now: Date = new Date();

// Assign type of Array of strings to the variable
let colors: string[] = ['red', 'green', 'blue'];

// Assign type of Array of numbers to the variable
let numbers: number[] = [1, 2, 3];

// Assign type of classes to the variable - we specify the class name, so the variable will be an instance of it
class Car {}

let car: Car = new Car();

// Assign type of object literal to the variable
let point: { x: number, y: number } = {
  x: 20,
  y: 20,
};

// Assign type of function to the variable - specify the arguments and types and then the expected return value
// We are returning nothing here, so we return void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) When a function returns an 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line and initialise it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we have a variable whose type can't be inferred correctly
let moreNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < moreNumbers.length; i++) {
  if (moreNumbers[i] > 0) {
    numberAboveZero = moreNumbers[i];
  }
}
