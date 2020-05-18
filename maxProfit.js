// Runtime: 60ms
// Time complexity: O(N)
// Memory: 35.4MB
var maxProfit = function(prices) {
	// only one element, nothing to compare
	if (prices.length < 2) {
		return 0;
	}

	let maxProfit = 0;
	let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2]);

	for (let i = prices.length - 2; i > -1; i--) {
		let profit = maxStock - prices[i];
		maxStock = Math.max(maxStock, prices[i]);
		maxProfit = Math.max(profit, maxProfit);
	}
	return maxProfit;
};


// Runtime: 880ms
// Time complexity:
// Memory: 41.6MB
// const maxProfit = function(prices) {
// 	let profit
// 	let maximumProfit = 0;

// 	prices.forEach(function(buy, index) {
// 		let rest = prices.slice(index + 1);
// 		if (rest) {
// 			let sell = Math.max(...rest)
// 			sell > buy ? profit = sell - buy : null
// 			profit > maximumProfit ? maximumProfit = profit : null
// 		}
// 	});

// 	return maximumProfit;
// }

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0