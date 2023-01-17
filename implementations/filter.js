Array.prototype.myFilter = function (callbackFn, thisArg) {
	// initialize variables
	const res = [];

	for (let i = 0; i < this.length; i++) {
		// cache value in case the callback fn modifies it
		const element = this[i];
		if (
			// ignore index if value is not defined for index (e.g. in sparse arrays).
			Object.hasOwn(this, i) &&
			callbackFn.call(thisArg, element, i, this)
		) {
			res.push(element);
		}
	}

	return res;
};