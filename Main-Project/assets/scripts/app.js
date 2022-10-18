const defaultResult = 0;
let currentResult = defaultResult;

//currentResult = ((currentResult + 10) * 3) / 2 - 1; -- using simple operators
//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1' -- using single quote.
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`; -- using `
//let errorMessage = 'An error \n' + 'ocurred!' -- \n for line break
//outputResult(currentResult,errorMessage) -- for displaying the error message instead the calculation description

// --- Functions ---

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + inputNumber;
  createOutput("+", initialResult, inputNumber);
}

function subtract() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - inputNumber;
  createOutput("-", initialResult, inputNumber);
}

function multiply() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * inputNumber;
  createOutput("x", initialResult, inputNumber);
}

function divide() {
  const inputNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / inputNumber;
  createOutput("/", initialResult, inputNumber);
}

function createOutput(operator, prevResult, inputValue) {
  const outputDescription = `${prevResult} ${operator} ${inputValue}`;
  outputResult(currentResult, outputDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
