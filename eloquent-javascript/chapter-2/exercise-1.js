function loopingTriangle(lines) {
    
    // const NO_OF_LINES = 7;
    // let output = '';
    // 
    // for (let i = 1; i <= NO_OF_LINES; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         output += '#';
    //     }
    //     output += '\n';
    // }
    // 
    // document.getElementById('output').innerHTML = output;

    if (!lines)
        lines = 10;

    let output = '',
        str = '#';

    for (str; str.length <= lines; str += '#') {
        // console.log(str);
        output += str + '\n';
    }

    document.getElementById('output').innerHTML = output;
    
}
