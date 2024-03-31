const bubbleSort = (arr) => {
	const n = arr.length
	let swapped, temp

	for (let i = 0; i < n - 1; i++) {
		swapped = false
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j + 1]
				arr[j + 1] = arr[j]
				arr[j] = temp
				swapped = true
			}
		}

		if (!swapped) break
	}

	return arr
}

// Example usage
const array = [5, 3, 8, 2, 1]
console.log(bubbleSort(array)) // Output: [1, 2, 3, 5, 8]

// Original Array: [ 5, 3, 8, 2, 1 ]
// 1st Iteration:  [ 3, 5, 2, 1, 8 ]
// 2st Iteration:  [ 3, 2, 1, 5, 8 ]
// 3st Iteration:  [ 2, 1, 3, 5, 8 ]
// 4st Iteration:  [ 1, 2, 3, 5, 8 ]
