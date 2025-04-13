import React from "react";

function AddExpense({handleSubmitFunction}) {
    return (
        <div className="add-expense-component">
            <h3>Add Expense</h3>
            <p>Enter your expense details below</p>
            <form onSubmit={handleSubmitFunction}>
                <input type="text" name="expense" placeholder="Enter expense name" /> <br />
                <input type="text" name="description" placeholder="Enter expense description" /> <br />
                <input type="text" name="category" placeholder="Enter expense category" /><br />
                <input type="number" name="amount" placeholder="Enter amount" /><br />
                <input type="date" name="date" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddExpense;