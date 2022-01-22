var expense = require("./expenses");

//Inital expense
console.log("Initial Budget of the Team:");
expense.calculateBudget();

expense.addExpense(1, "Expense 1", 500);
expense.addExpense(2, "Expense 2", 900);
//After adding two expense
console.log("After Adding two expenses with value 500, 900: ");
expense.calculateBudget();

expense.deleteExpenseById(2);
//After delete expense id 2
console.log("After deleting expense with id 2 and value 900 : ");
expense.calculateBudget();

expense.updateExpense(1, "Expense 1", 1000);
//After update expense
console.log("After updating expense id 1 with value 1000 : ");
expense.calculateBudget();
