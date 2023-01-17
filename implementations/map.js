Array.prototype.map = function (callbackFn, thisArg) {
	// initialize variables
	const len = this.length
	// do not mutate. create new arr instead
	const arr = new Array(len)

	for (let i = 0; i < this.length; i++) {
		// call the callback on each arr el with parameters
		if (Object.hasOwn(this, k)) {
			arr[i] = callbackFn.call(thisArg, this[i], i, this)
		}
	}

	return arr
}