// Runtime: 79ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 49MB
const maxScore = (cardPoints, k) => {
	let cardPointsLength = cardPoints.length
	let i = 0
	let j = cardPointsLength - k
	let total = _.sum(cardPoints.slice(j, cardPointsLength))
	let best = total

	while (k--) {
		best = Math.max(best, total += cardPoints[i++] - cardPoints[j++])
	}

	return best
};

console.log(minimumDifference([1,2,3,4,5,6,1], 3)); // 12
console.log(minimumDifference([2,2,2], 2)); // 4
console.log(minimumDifference([9,7,7,9,7,7,9], 7)); // 55
