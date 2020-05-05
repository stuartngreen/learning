// 2. Program to print the below series:
// 0 1 1 2 3 5 8 13

function fibonacciSequence(n) { // n = how many numbers you want output
    let n1 = 0, n2 = 1, n3;
    let output = [];

    if (n <= 2) {
        for (let i = 0; i < n; i++) {
            output.push(i);
        }
    }

    if (n > 2) {
        output.push(0);
        output.push(1);

        for (let i = 0; i < n - 2; i++) {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
            output.push(n3);
        }
    }

    return output;
}

console.log(fibonacciSequence(8));
