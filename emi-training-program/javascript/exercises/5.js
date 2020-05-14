// 5. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene. 

let input = prompt('Enter 3 lengths for the sides of a triangle:', '12 12 11');

let triangle = input.split(' ').map(x => { return parseInt(x) });

function triangleType(triangle) {
    if (triangle[0] === triangle[1] && triangle[0] === triangle[2]) {
        return 'equilaterial';
    }
    else if (triangle[0] === triangle[1] || triangle[0] === triangle[2] || triangle[1] === triangle[2]) {
        return 'isosceles';
    }
    else {
        return 'scalene';
    }
}

console.log('Triangle is ' + triangleType(triangle));
