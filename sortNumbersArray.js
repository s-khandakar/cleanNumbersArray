const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

const cleanRoom = array  => {
	// new array for adding numbers and number subsets
	const newArray = [];

	// sort existing array in ascending order
	const sortArray = () => {
		array.sort(function(a,b){
			return a-b
		})	
	}
	// check array for repeats 
	const checkArrayForRepeats =() => {
		let repeat = 0;
		let prev = array[0];
		
		for (let i=1;i<array.length;i++){
			let curr = array[i];
			if (lastElement(i)) {
				if (numberRepeats (curr, prev)){
					repeat++;
					addToNewArray(prev, repeat);
				} else {
					addToNewArray(prev, repeat);
					addToNewArray(curr, 0);
				}
			} else { 
				// if not last element
				if (numberRepeats (curr, prev)){
					repeat++;
				} else {
					addToNewArray(prev, repeat);
					// repeat is zeroed for the new number
					repeat = 0;
				}		
			}	
				prev = curr;
		}		
	}
	
	//check if it's the last element
	const lastElement = (index) => {
		if (index === (array.length-1))
			return true;
	}

	//check if number repeats
	const numberRepeats = (curr, prev) => {
		if (curr === prev)
			return true;
	}

	// add numbers to new Array
	const addToNewArray = (number, repeat) => {
		const subArray = [];
		// if no repeats, add number to array
		if (repeat === 0) {
			newArray.push(number);
		} else { 
			// if number repeats, add to subArray
			for (let i=0;i<=repeat;i++) {
				subArray.push(number) 
			} // add subArray to newArray
			newArray.push(subArray);
		}	
	}

	sortArray();
	checkArrayForRepeats();
	return newArray;
}
cleanRoom(array)