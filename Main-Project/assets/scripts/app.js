const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1' 
// -- same as the comand below but in a extended way
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`
//let errorMessage = 'An error \n' + 'ocurred!' -- \n for line break

outputResult(currentResult,calculationDescription);
//outputResult(currentResult,errorMessage)
// -- for displaying the error message instead the calculation description