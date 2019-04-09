function countBs(ch, str) {
    
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch)
            count++;
    }

    return count;
}

function beanCounting(ch, str) {
    
    let output = 'The count of ' + ch + '\'s is: ';

    document.getElementById('output').innerHTML = output += countBs(ch, str);
}
