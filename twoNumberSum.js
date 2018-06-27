function twoNumberSum(array, targetSum) {

    for (var i = 0; i < array.length; i++) {
        for (var j = 1 + i; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]].sort((a, b) => a - b); 
            }
        }
    }
    return [];
}