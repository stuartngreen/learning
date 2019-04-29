function arrayToList(arr) {
	let list = null;
	
	for (let i = arr.length - 1; i >= 0; i--) {
		list = {
			value: arr[i],
			link: list
		};
	}
	
	return list;
}

function listToArray(list) {
	let arr = [];
	
	for (let node = list; node !== null; node = node.link) {
		arr.push(node.value);
	}
	
	return arr;
}

function prepend(el, list) {
	let newList = null;

	newList = {
		value: el,
		link: list
	}

	return newList;
}

function nth(list, num) {
	let node = list;

	for (let i = 0; i < num; i++) {
		node = node.link;
	}

	return node ? node.value : undefined;
}

function nthRecursive(list, num) {
	if (!list) {
		return undefined;
	}
	else if (num === 0) {
		return list.value;
	}
	else {
		list = list.link;
		return nthRecursive(list, num - 1);
	}
}

function callArrayToListToArray(array, el, pos) {

	let list = arrayToList(array);
	let output1 = `Converted to list:\t ${ JSON.stringify(list) } \nConverted back to array:\t ${ listToArray(list) }`;

	let newList = prepend(el, list);
	let output2 = `Prepend element "${ el }" to list:\t ${ JSON.stringify(newList) } \nConverted back to array:\t ${ listToArray(newList) }`;

	let output3 = `The element at node ${ pos } in the list is "${ nthRecursive(newList, pos) }"`;

	document.getElementById('output').innerHTML = output1 + '\n\n' + output2 + '\n\n' + output3;
}
