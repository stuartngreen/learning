function chessboard() {

    const GRID_SIZE = 8;
    let output = '';
    
    for (let i = 0; i < GRID_SIZE; i++) {
        let str = '';

        for (let j = 0; j < GRID_SIZE; j++) {
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
