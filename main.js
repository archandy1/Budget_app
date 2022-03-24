/* Budget app should display 3 values:
    - initial budget amount (value)
    - expenses (description, value) there can be multiple expenses
    - Balance (value after expenses)
*/

var expenses = [
    {description: 'banan', cost: 10},
    {description: 'owoc', cost: 10},
    {description: 'buła', cost: 10}
]

let initialBudget = () => {
    let l = document.getElementById("expensesList");
    for (let counter = 0; counter < expenses.length; counter++) {
        let newExpens = document.createElement("li");
        newExpens.innerText = expenses[counter].description + expenses[counter].cost;
        l.appendChild(newExpens);
    }
}

function expenses(description, expAmount) {}


function balance() {

}
initialBudget();