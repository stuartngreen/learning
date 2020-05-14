// 1. Program to accept 10 numbers from user and display the even ones.

let numbers = prompt('Enter 10 numbers', '0 12 13 8 78 1 65 44 5 8');

numbers = numbers.split(' ');

let output = [];

numbers.forEach(x => {
    x = parseInt(x);

    if (x % 2 === 0) {
        output.push(x);
    }
});

console.log(output);
