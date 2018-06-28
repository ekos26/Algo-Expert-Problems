function isPalindrome(string) {
    var reversed = string.split('').reverse().join('');

    if (string !== reversed) {
        return false;
    }
    return true;
}