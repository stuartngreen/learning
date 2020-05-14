// 3. Write a program that takes a number as input and then displays a rectangle of 3 columns wide and 5 rows tall using that digit.
// Enter a number: 5
// Expected output:
// 555
// 5 5
// 5 5
// 5 5
// 555

function makeRect(n) {
    for (let i = 0; i < 5; i++) {
        let s ='';
        for (let j = 0; j < 3; j++) {
            if (j === 1 && i !== 0 && i !== 4) {
                s += ' ';
            }
            else {
                s += n;
            }
        }
        console.log(s);
    }
}

makeRect(5);

