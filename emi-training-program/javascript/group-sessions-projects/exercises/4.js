// 4. Program to accept the character from the user and check if the entered character is Vowel or not.
// Please note that the condition has to be checked for both upper and lowercase.

let vowels = ['a', 'e', 'i', 'o', 'u'];
let input = prompt('Enter a character:', 'A');

function vowelCheck(letter) {
    if (vowels.includes(letter.toLowerCase())) {
        return true;
    }
    return false;
}

if (vowelCheck(input)) {
    console.log(input + ' is a vowel.');
}
else {
    console.log(input + ' is not a vowel.');
}
