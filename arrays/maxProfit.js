// Runtime: 72ms
// Time complexity: O(N)
// Memory: 35.4MB
const maxProfit = prices => {
	let max = 0;
	let min = Number.MAX_VALUE;
	for (let i = 0; i < prices.length; i+=1) {
		if (prices[i] < min) {
			min = prices[i];
		} else {
			max = Math.max(max, prices[i] - min)
		}
	}

	return max;
}

// Runtime: 880ms
// Time complexity:
// Memory: 41.6MB
// const maxProfit = function(prices) {
// 	if (prices.length < 2) {
// 		return 0;
// 	}

// 	let maxProfit = 0;
// 	let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2]);

// 	for (let i = prices.length - 2; i > -1; i--) {
// 		let profit = maxStock - prices[i];
// 		maxStock = Math.max(maxStock, prices[i]);
// 		maxProfit = Math.max(profit, maxProfit);
// 	}
// 	return maxProfit;
// }

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0