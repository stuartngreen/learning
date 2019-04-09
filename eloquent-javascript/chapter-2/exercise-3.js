function chessboard(gridSize) {

    let output = '';
    
    for (let i = 0; i < gridSize; i++) {
        let str = '';

        for (let j = 0; j < gridSize; j++) {
            if (i % 2 == 0) {
                str += (j % 2 == 0 ? ' ' : '#');
            }
            else {
                str += (j % 2 == 0 ? '#' : ' ');
            }
        }
        
        output += str += '\n';
        // console.log(str);
    }
    
    document.getElementById('output').innerHTML = output;
}
