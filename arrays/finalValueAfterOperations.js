// Runtime: 80ms
// Time complexity: O(n)
// Memory: 40.1MB
const finalValueAfterOperations = operations => {
	let x = 0;
    for (let i = 0; i < operations.length; i++){
        if(operations[i].includes("--")) {
            x--
        } else {
            x++
        }
    }
    
    return x

console.log(finalValueAfterOperations(["--X","X++","X++"])); // 1
console.log(finalValueAfterOperations(["++X","++X","X++"])); // 3
console.log(finalValueAfterOperations(["X++","++X","--X","X--"])); // 0