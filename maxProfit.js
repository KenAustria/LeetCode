// Runtime: 880ms
// Time complexity:
const maxProfit = function(prices) {
	// declare variables
	let profit
	let maximumProfit = 0

	// iterate array, keeping track of the index
	prices.forEach(function(buy, index) {
		// save subarray reference
		let rest = prices.slice(index + 1)
		// if subarray exist, find the biggest value
		if (rest) {
			let sell = Math.max(...rest)
			// calculate profit
			sell > buy ? profit = sell - buy : null
			// check if profit is greater than maxProfit
			profit > maximumProfit ? maximumProfit = profit : null
		}
	});

	return maximumProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));