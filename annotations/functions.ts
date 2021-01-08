// Declare that the function must take two arguments (a and b), both numbers, and return a number
// ES6 example
const add = (a: number, b: number): number => {
    return a + b;
};

// Non-ES6 example
function multiply(a: number, b: number): number {
    return a * b;
}

// Anonymous function example
const divide = function (a: number, b: number): number {
    return a / b;
};

// Void - a function that doesn't return a value (can return null or undefined)
const logger = (message: string): void => {
    console.log(message);
};

// Never - a function that never completes
const throwError = (message: string): never => {
    throw new Error(message);
};

// Destructuring with annotations - destructure first, and then annotate as a regular object
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
