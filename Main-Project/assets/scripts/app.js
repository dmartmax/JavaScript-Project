const defaultResult = 0;
let currentResult = defaultResult;
const outputDescription = 'That was an easy one!'

//currentResult = ((currentResult + 10) * 3) / 2 - 1; -- using simple operators
//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1' -- using single quote.
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`; -- using `
//let errorMessage = 'An error \n' + 'ocurred!' -- \n for line break
//outputResult(currentResult,errorMessage) -- for displaying the error message instead the calculation description


// --- Functions ---
function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, outputDescription);
}

addBtn.addEventListener('click', add);