Array.prototype.myFilter = function (callbackFn, thisArg) {
	// initialize variables
	const res = []

	for (let i = 0; i < this.length; i++) {
		// cache value in case the callback fn modifies it
		const iValue = this[i]
		// if the callback evaluates to true, push the el into the res
		if (Object.hasOwn(this, i) && callbackFn.call(thisArg, iValue, i, this)) {
			results.push(iValue)
		}
	}

	return res
};