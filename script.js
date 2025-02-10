let input = "";
let total = 0;
let operator = null;
let operand = null;
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonValue = button.textContent;
		if (buttonValue == "AC") {
			clear();
		} else if (buttonValue === "=") {
			if (operator && operand !== null) {
				total = operate(operand, parseFloat(input), operator);
				if (Number.isInteger(total)) {
					input = total;
				} else if ((total = "ERROR")) {
					input = total;
				} else {
					input = total.toFixed(3);
				}
				display.value = input;
				operator = null;
				operand = null;
			}
		} else if (["+", "-", "*", "/"].includes(buttonValue)) {
			if (operator && input === "") return;
			if (input !== "") {
				if (operator && operand !== null) {
					operand = operate(operand, parseFloat(input), operator);
				} else {
					operand = parseFloat(input);
				}
				operator = buttonValue;
				input = "";
			}
		} else {
			if (buttonValue === "." && input.includes(".")) {
				return;
			}
			input += buttonValue;
		}
		display.value = input;
	});
});

function operate(num1, num2, operator) {
	if (num1 == undefined || num2 == undefined) {
		return 0;
	}
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "*":
			return multiply(num1, num2);
		case "/":
			return divide(num1, num2);
		default:
			return num2;
	}
}
display.value = input;
function clear() {
	input = "";
	total = 0;
	operator = null;
	operand1 = null;
}
function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	if (b === 0) {
		return "ERROR";
	}
	return a / b;
}
