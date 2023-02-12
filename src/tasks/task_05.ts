//10 minute was spent for this task



export function find(firstInitialArray: number[], secondInitialArray: number[]) {
	let result: number[] = [];

	const firstObjCountNum: any = {}
	const secondObjCountNum: any = {}

	firstInitialArray.forEach(el => {
		firstObjCountNum[el] = firstObjCountNum[el] + 1 || 1;
	})
	secondInitialArray.forEach(el => {
		secondObjCountNum[el] = secondObjCountNum[el] + 1 || 1;
	})

	Object.keys(firstObjCountNum).forEach(el => {
		if (firstObjCountNum[el] >= 2 && secondObjCountNum[el] >= 2) {
			result.push(Number(el))
		}
	})
	return result
}