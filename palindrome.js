// function isPalindrome(string) {
//     var reversed = string.split('').reverse().join('');

//     if (string !== reversed) {
//         return false;
//     }
//     return true;
// }

// function isPalindrome(string) {
//     let reversedString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i];
//     }
//     return string === reversedString;
// }

// function isPalindrome(string) {
//     const reversedChars = [];
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedChars.push(string[i]);
//     }
//     return string === reversedChars.join("");
// }

function isPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    while (leftIdx < rightIdx) {
        if (string[leftIdx] !== string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}