//1 minute was spent for this task

export const roundedNumber = (value: number) => {
	let remainderNumber = value % 5;

	if (remainderNumber === 0) {
		return value;
	}
	if (remainderNumber >= 2.5) {
		return (value - remainderNumber + 5);
	}
	if (remainderNumber < 2.5) {
		return (value - remainderNumber)
	}
}