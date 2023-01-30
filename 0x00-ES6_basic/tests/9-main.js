import getFullBudgetObject from '../9-getFullBudget';

const fullBudget = getFullBudgetObject('899', 9043, 2344);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
