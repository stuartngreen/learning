function reverseArray(arr) {
	
	if (arr.length) {
		let newArr = [];
		
		for (let i = arr.length - 1; i >= 0; i--) {
			newArr.push(arr[i]);
		}
		
		return newArr;
	}
	else {
		console.log('Function requires an array as input.');
	}
}

function reverseArrayInPlace(arr) {
	
	if (arr.length) {
		let i = arr.length - 1;
		
		for (let j = 0; j < Math.floor(arr.length / 2); j++) {
			let temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
			i--;
		}
		
		return arr;
	}
	else {
		console.log('Function requires an array as input.');
	}
}

function callReverseArray(arr) {
	
    let output = `New reversed array:\t\t ${ reverseArray(arr) }\nOriginal array reversed:\t ${ reverseArrayInPlace(arr) }`;

    document.getElementById('output').innerHTML = output;
}
