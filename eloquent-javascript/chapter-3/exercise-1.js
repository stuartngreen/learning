function minimum(a, b) {
    if (a < b)
        return a;

    return b;
}

function callMinimum(a, b) {

    let output = '';

    if (!a || !b) {
        output = 'Enter both values.';
    }
    else {
        let result = minimum(a, b);
        output = 'The minimum of ' + a + ' and ' + b + ' is ' + result + '.';
    }

    document.getElementById('output').innerHTML = output;
    // console.log(output);

}
