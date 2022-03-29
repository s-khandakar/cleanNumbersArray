// Question 2: Write a javascript function that takes an array 
//of numbers and a target number. The function should find two different 
//numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

const array = [1,2,3];

const sumFromArray = (array, target) => {
	const answerArray = [];
	for (let i = 0; i<array.length; i++) {
		for (let j = 0; j<array.length; j++) {
			let x = array[i];
			let y = array[j];
			if ((x+y)===target) {
				answerArray.push(x,y);
				return answerArray;
			}
		}
	}
}

sumFromArray(array,4);