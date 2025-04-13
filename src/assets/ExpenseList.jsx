import React from "react";
import Expense from "./Expense";

function ExpenseList({ newObj }) {
    if (newObj) {
        return (
            <tbody>
                {< Expense user={newObj} />}
            </tbody>
        );
    }
}

export default ExpenseList;