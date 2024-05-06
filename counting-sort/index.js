const countSort = (nums) => {
	let max = -Infinity

	for (const num of nums) if (num > max) max = num

	const countArray = new Array(max + 1).fill(0)

	for (const num of nums) countArray[num]++

	for (let i = 1; i <= max; i++) countArray[i] += countArray[i - 1]

	const sortNums = new Array(nums.length)

	for (let i = max; i >= 0; i--) {
		sortNums[countArray[nums[i]] - 1] = nums[i]
		countArray[nums[i]]--
	}

	return sortNums
}

const inputArray = [4, 3, 12, 1, 5, 5, 3, 9]
const outputArray = countSort(inputArray)

console.log(outputArray.join(', '))
