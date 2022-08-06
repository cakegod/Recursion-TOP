function mergeSort(arr: number[]): number[] {
	// Return when there is only an element
	if (arr.length === 1) {
		return arr;
	}

	const half = Math.ceil(arr.length / 2);
	const left = arr.slice(0, half);
	const right = arr.slice(half);

	// Call mergeSort until there's only one element on each side
	return merger(mergeSort(left), mergeSort(right));

	function merger(left: number[], right: number[]): number[] {
		const sorted: number[] = [];

		while (left.length && right.length) {
			// Push the smallest number to sorted
			if (left[0] < right[0]) {
				sorted.push(left.shift() as number);
			} else {
				sorted.push(right.shift() as number);
			}
		}

		// Join the three arrays
		return sorted.concat(right.concat(left));
	}
}

console.log(mergeSort([4, 3, 2, 1])); // 1, 2, 3, 4;
console.log(mergeSort([14, 83, 22, 51, 41])); // 14, 22, 41, 51, 83;
console.log(mergeSort([74, 35, 332, 1144])); // 35, 74, 332, 1144
