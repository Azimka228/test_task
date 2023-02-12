import React from "react";
import {getMultiplicationTable} from "./tasks/task_06";
import {find} from "./tasks/task_05";
import {isPrimeNumber} from "./tasks/task_04";
import {getCurrentNaming} from "./tasks/task_03";
import {roundedNumber} from "./tasks/task_02";
import {createString} from "./tasks/task_01";

const dataTask1 = ["Москва", "Санкт-Петербург", "Воронеж"]
const FirstArrayTask5 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
const SecondArrayTask5 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]


function App() {

	console.log("TASK 01 \n", createString(dataTask1))
	console.log("TASK 02 \n", roundedNumber(23.1))
	console.log("TASK 03 \n", getCurrentNaming(231))
	console.log("TASK 04 \n ", isPrimeNumber(59))
	console.log("TASK 05 \n ", find(FirstArrayTask5, SecondArrayTask5))
	console.log("TASK 06 \n ", getMultiplicationTable(10))

	return (
		<div>
			Look at Console
		</div>
	);
}

export default App;
