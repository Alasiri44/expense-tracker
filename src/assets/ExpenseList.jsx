import React from "react";
import Expense from "./Expense";

// Renders a list of Expense components inside a <tbody>
function ExpenseList({ newObj }) {
    if (newObj) {
        return (
            // Render each expense as a table row
            <tbody>
                {newObj.map((myObj, index) => {
                    return < Expense key={index} user={myObj} />
                })}
            </tbody>
        );
    }
}

export default ExpenseList;