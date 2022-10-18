const defaultResult = 0;
let currentResult = defaultResult;
let allEntries = [];

/*
currentResult = ((currentResult + 10) * 3) / 2 - 1; -- using simple operators
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1' -- using single quote.
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`; -- using `
let errorMessage = 'An error \n' + 'ocurred!' -- \n for line break
outputResult(currentResult,errorMessage) -- for displaying the error message instead the calculation description
*/

// --- Functions ---

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += inputNumber;
  createOutput("+", initialResult, inputNumber);
  createObject("Add", initialResult, inputNumber, currentResult);
}

function subtract() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= inputNumber;
  createOutput("-", initialResult, inputNumber);
  createObject("Subtract", initialResult, inputNumber, currentResult);
}

function multiply() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= inputNumber;
  createOutput("x", initialResult, inputNumber);
  createObject("Multiply", initialResult, inputNumber, currentResult);
}

function divide() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= inputNumber;
  createOutput("/", initialResult, inputNumber);
  createObject("Divide", initialResult, inputNumber, currentResult);
}

function createObject(operator, prevResult, inputValue, newResult) {
  const newEntry = {
    operation: operator,
    oldResult: prevResult,
    entryNumber: inputValue,
    result: newResult,
  };

  allEntries.push(newEntry);
  console.log(allEntries);
}

function createOutput(operator, prevResult, inputValue) {
  const outputDescription = `${prevResult} ${operator} ${inputValue}`;
  outputResult(currentResult, outputDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
