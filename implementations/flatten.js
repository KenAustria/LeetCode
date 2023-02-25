const flatten = arr => {
	return arr.reduce((acc, curr) =>
		// if item is an array, extract items from the input array to new array
		// if item is not an array, place into new array
		acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []
	);
}