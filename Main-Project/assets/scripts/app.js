const defaultResult = 0;
let currentResult = defaultResult;

//currentResult = ((currentResult + 10) * 3) / 2 - 1; -- using simple operators
//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1' -- using single quote.
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`; -- using `
//let errorMessage = 'An error \n' + 'ocurred!' -- \n for line break
//outputResult(currentResult,errorMessage) -- for displaying the error message instead the calculation description


// --- Functions ---
function add(num1, num2) {
  return num1 + num2;
}

currentResult = add(5,15);

const outputDescription = 'That was an easy one!'
outputResult(currentResult, outputDescription);

