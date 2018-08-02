function findThreeLargestNumbers(array) {
	let firstMax = -Infinity;
	let secondMax = -Infinity;
	let thirdMax = -Infinity;
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= firstMax) {
			thirdMax = secondMax;
			secondMax = firstMax;
			firstMax = array[i];
		} else if (array[i] >= secondMax) {
			thirdMax = secondMax;
			secondMax = array[i];
		} else if (array[i] >= thirdMax) {
			thirdMax = array[i];
		}
	}
	return [thirdMax, secondMax, firstMax];
}