function range(start, end) {
    
    let range = [];

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (start; start <= end; start++) {
        range.push(start);
    }

    return range;
}

function sum(numbers) {

    let total = 0;

    if (numbers.length) {

        for (let i = 0; i < numbers.length; i++)  {
            total += numbers[i];
        }

        return total;
    }
    else {
        console.log('Function requires an array of numbers');
    }
}

function callSumRange(start, end) {

    let output = `The sum of the range of numbers from ${ start } to ${ end } is ${ sum(range(start, end)) }.`;

    document.getElementById('output').innerHTML = output;
}
