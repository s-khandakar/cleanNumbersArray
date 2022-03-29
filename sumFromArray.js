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