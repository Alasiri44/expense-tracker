import React from "react";

// Renders the form for adding a new expense
function AddExpense({ handleSubmitFunction }) {
    return (
        <div className="add-expense-component">
            <h3>Add Expense</h3>
            <p>Enter your expense details below</p>
            <form onSubmit={handleSubmitFunction}>
                {/* Input fields for each expense detail */}
                <input type="text" name="expense" placeholder="Enter expense name" required /> <br />
                <input type="text" name="description" placeholder="Enter expense description" required /> <br />
                <input type="text" name="category" placeholder="Enter expense category" required /><br />
                <input type="number" name="amount" placeholder="Enter amount" required /><br />
                <input type="date" name="date" required /><br />

                {/* Submit button to trigger form submission */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddExpense;