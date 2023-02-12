//30 minutes was spent for this task


export const getMultiplicationTable = (multiplyTo: number) => {
	let result = ""
	for (let i = 1; i < multiplyTo + 1; i++) {
		let line = ""
		for (let j = 1; j < multiplyTo + 1; j++) {
			const maxSpaces = String(multiplyTo * multiplyTo).length
			const curNumLen = String(i * j).length
			const currentSpacesLen = (maxSpaces - curNumLen) + 1
			const fixSpaces = (i+'').length > 1 && j === 1? 1 : 0

			let spaces = ""
			//adding the required number of spaces
			for (let i = 0; i < currentSpacesLen - fixSpaces; i++) {
				spaces += " "
			}

			line += (spaces + i * j)
		}
		if (i === 1) {
			let currentSpaces = ''
			for (let i = 0; i < String(multiplyTo).length; i++) {
				currentSpaces += " "
			}
			// display the first line
			result += (currentSpaces + (line.trim() + "\n"))
			// display the second Line
			result += (i + line + "\n")
		} else {
			// display the all remaining lines
			result += (i + line + "\n")
		}
	}
	return result
}