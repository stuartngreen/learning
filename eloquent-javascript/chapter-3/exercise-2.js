function recursion(num) {
    
    let output = '';

    function isEven(num) {

        if (num == 0)
            return true;
        else if (num == 1)
            return false;
        else if (num < 0)
            return isEven(-num);
        else 
            return isEven(num - 2);
    }

    output += isEven(num);
    // console.log(output);
    document.getElementById('output').innerHTML = 'Even number? ' + output;
}
