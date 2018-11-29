function insert(num) {
	// body...
	document.form.textview.value = document.form.textview.value+num;
}
function equal() {
	// body...
	let exp = document.form.textview.value;
	if(exp)
	{
		document.form.textview.value = eval(exp);
	}
}
function clear() {
	document.form.textview.value = "";
}
function back() {
	let exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length-1);
}
// -------------------------------------------------

// SECOND CALCULATOR WITH STRUCTURED FUNCTIONS

function add() {
	// body...
}
function subtract() {
	// body...
}
function multiply() {
	// body...
}
function divide() {
	// body...
}
function operate(op1, op2) {
	// body...
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate
}