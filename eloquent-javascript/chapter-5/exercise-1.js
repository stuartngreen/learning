

function callFlattening() {

    let output = 'callFlattening()';

    document.getElementById('output').innerHTML = output;
}








let array = [];
array.push([1,2,3], [4,5,6], [7,8,9]);

console.log(array.reduce((flat, current) => flat.concat(current), []));


