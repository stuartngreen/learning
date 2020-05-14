//// Array Operations

let numbers1 = [12, 20, 45, 21, 45, 22, 44, 104];
let numbers2 = [5, 19, 45, 67, 53, 23, 1, 67, 11];
let strings1 = ['orange', 'pear', 'peach', 'pineapple', 'strawberry', 'apple'];
let strings2 = ['sand', 'gravel', 'pebbles', 'rocks', 'boulders'];


//// 1. Iterate:

//// for...of -> gets the array values
for (let num of numbers1) {
    console.log(num);
}

//// for...in -> gets the array indexes
for (let index in numbers1) {
    console.log(index);
    console.log(numbers1[index]);
}

//// forEach -> executes some function on each array item
numbers1.forEach(value => console.log(value * 2));
strings1.forEach(function(value) {
    console.log('eat one ' + value);
}); // alternate syntax, same thing


//// 2. Reduce: -> reduces an array to single value using your function
function reducer(total, currentValue) {
    return total += currentValue;
}
console.log(numbers1.reduce(reducer));

function addEvenNumbersOnly(total, currentValue, index, array) { // your reducer function can take up to 4 args
    return (currentValue % 2 === 0) ? total += currentValue : total;
}
console.log(numbers1.reduce(addEvenNumbersOnly, 1000)); // also adds 1000 to the result


//// 3. Slice:
console.log(strings1.slice(2,5)); // start and end, returns an array of indexes 2,3,4 in this example


//// 4. Search:

//// includes -> returns boolean value
console.log(numbers1.includes(99)); // false
console.log(numbers1.includes(45)); // true
console.log(strings2.includes('gravel')); // true

//// find -> returns the first matching element based on your provided function
console.log(strings1.find(fruit => fruit === 'apple'));

//// indexOf -> gets index of provided value, returns -1 if not found
console.log(numbers1.indexOf(45));
console.log(numbers2.indexOf(45, 3)); // <- returns -1 because starting index was provided
console.log(strings1.indexOf('pineapple'));
console.log(strings1.indexOf('burp'));


//// 5. Filter: -> returns an array with all matching items based on your provided function
console.log(numbers2.filter(item => item > 40));
console.log(strings2.filter(item => item.length > 5));


//// 6. Remove: -> extracting values from arrays

//// pop -> removes last item in array and returns it
console.log(strings2.pop());
console.log(strings2);

//// shift -> removes the first item in array and returns it
console.log(numbers2.shift());
console.log(numbers2);

//// splice -> returns new array starting at provided index, plus removes same values from old array
console.log(numbers1);
console.log(numbers1.splice(2, 2)); // can also provided amount of items to return (defaults to end of array)
console.log(numbers1);

//// [...item] spread operator -> expands an iterable object into a list of arguments
function sum(...numbers) {
    let total = 0;
    for (num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6)); // send multiple arguments
console.log(sum(...numbers2)); // you can send an array to the function using ... as well

let numbers3 = [...numbers1, 450, 40, 50, ...numbers2]; // concatenate arrays
console.log(numbers3);


//// 7. Fill:

numbers3.fill(0, 3, 8); // fill with zeroes from index 3 to 7 incl.
console.log(numbers3);

//// from -> create an array from some iterable object.

let strings3 = Array.from(strings2, item => 'no ' + item); // can also perform a function on each item in the new array
console.log(strings3);

let map = new Map([
    ['apples', 5],
    ['pears', 20],
    ['oranges', 18]
]);
console.log(
    Array.from(map.keys()),
    Array.from(map.values())
); // creating arrays from keys and values in a map


//// 8. Map: -> creates a new array from results of a function on each array element

let numbers1Doubled = numbers1.map(item => item * 2);
console.log(numbers1Doubled);

let everySecondNumberDoubled = numbers1.map(
    (currentVal, index, array) => {
        return index % 2 === 0 ? currentVal * 2 : currentVal;
    }
)
console.log(everySecondNumberDoubled);

let employees = new Object([
    { name: 'john', surname: 'smith' },
    { name: 'jane', surname: 'doe' }
]);
console.log(
    employees.map((item) => {
        return item.name + ' ' + item.surname; // can be used with objects too
    })
);


//// 9. Concat -> creates a new array from provided arrays
console.log(numbers1.concat(numbers2, numbers3));


//// 10. Cloning:
console.log(strings1.slice()); // you can clone an array by slicing (defaults to start at 0)
console.log(Array.from(strings1)); // or by using Array.from


//// 11. Query:

//// every -> checks if all elements in the array pass the test in the function provided
console.log(numbers2.every(item => item > 0)); // every item is greater than 0 - true
console.log(numbers2.every(item => item > 100)); // false

//// some -> checks if at least one element passes the test
console.log(numbers1.some(item => item > 100)); // true


//// 12. Insert:

//// push -> inserts new values at the end of an array
numbers1.push(1001);
console.log(numbers1);
numbers1.push(...numbers2); // using spread operator to insert
console.log(numbers1);

//// unshift -> inserts new values at the beginning of an array
numbers1.unshift(999);
console.log(numbers1);


//// 13. Empty:
console.log(numbers3.length);
numbers3.length = 0; // kills the array contents
console.log(numbers3);

numbers3 = Array.from(numbers2);
console.log(numbers3);
numbers3.splice(0, numbers3.length); // kills the array contents
console.log(numbers3);
