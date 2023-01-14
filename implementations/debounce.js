export default function debounce(fn, wait = 0) {
	// initialize variables
	let timeoutId = null

	return function (...args) {
		clearTimeout(timeoutId)
		// given a wait duration before the function can be invoked, a timer is needed
		timeoutId = setTimeout(() => {
			timeoutId = null
			// has the same 'this' as the outer function's 'this'
			// as it's within the same arrow function
			fn.apply(this, args)
		}, wait)
	}
}