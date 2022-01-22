module.exports = {
  expenses: [],

  Expense: function (id, title, value) {
    this.id = id;
    this.title = title;
    this.value = value;
  },

  addExpense: function (id, title, value) {
    this.expenses.push(new this.Expense(id, title, value));
  },

  updateExpense: function (id, title, value) {
    let existingExpense = this.expenses.find((x) => x.id == id);
    if (existingExpense) {
      existingExpense.title = title;
      existingExpense.value = value;
    } else {
      console.log("This expense not found to update");
    }
  },

  deleteExpenseById: function (id) {
    let existingExpense = this.expenses.find((x) => x.id == id);
    if (existingExpense) {
      this.expenses = this.expenses.filter((x) => x.id !== id);
    } else {
      console.log("This expense not found");
    }
  },

  calculateBudget: function () {
    let amount = 0;
    this.expenses.forEach((element) => {
      amount = amount + element.value;
    });
    console.log("Budget : " + amount);
  },
};
