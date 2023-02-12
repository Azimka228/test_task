//10 minute was spent for this task


export function getCurrentNaming(value: number) {
	let myNum = String(value)
	let myNumArr = []
	for (let i = 0; i < myNum.length; i++) {
		myNumArr.push(myNum.charAt(i));
	}

	let endPosition = Number(myNumArr[myNumArr.length - 1])
	let penultPosition = Number(myNumArr[myNumArr.length - 2])

	if ((endPosition >= 5 && endPosition <= 9) || (endPosition === 0) ||
		(endPosition === 1 && penultPosition === 1) ||
		(endPosition >= 2 && endPosition <= 4 && penultPosition === 1)
	) {
		return(`«${value} компьютеров»`);
	}

	if (endPosition === 1 && penultPosition !== 1) {
		return(`«${value} компьютер»`)
	}

	if (endPosition >= 2 && endPosition <= 4 && penultPosition !== 1) {
		return(`«${value} компьютера»`)
	}

}