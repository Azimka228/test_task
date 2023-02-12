//10 minute was spent for this task


export const isPrimeNumber = (numb: number) => {
	//if the number is not an integer, it will return this string with a warning
	if (!Number.isInteger(numb)) {
		return 'put an integer number!!'
	}

	let count = 0;
	for (let i = 2; i <= numb - 1; i++) {
		let divisor = numb % i;
		if (divisor === 0) {
			count = count + 1;
		}
	}

	return count === 0
}