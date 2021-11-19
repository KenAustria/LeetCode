// Runtime: 76ms
// Time complexity: O(n²)
// Memory: 38.9MB

const maximumWealth = () => {
	return Math.max(...accounts.map(customer => customer.reduce((a, b) => a + b )));
}

console.log(maximumWealth([[1,2,3],[3,2,1]])); // 6
console.log(maximumWealth([[1,5],[7,3],[3,5]])); // 10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])); // 17