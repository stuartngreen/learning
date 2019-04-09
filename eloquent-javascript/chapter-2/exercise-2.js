function fizzBuzz(limit) {

    let output = '';

    for (let i = 1; i <= limit; i++) {
        let str = '';

        if (i % 3 == 0) {
            str = 'Fizz';
            if (i % 5 == 0) {
                str += 'Buzz';
            }
        }
        else if (i % 5 == 0) {
            str = 'Buzz';
        }
        else {
            str += i;
        }

        // console.log(str);
        output += str + '\n';
        document.getElementById('output').innerHTML = output;
    }
}
