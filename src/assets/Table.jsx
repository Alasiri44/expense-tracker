import React from "react";
import ExpenseList from "./ExpenseList";

function Table({newObj}){
    return (
        <div>
            <table className="expense-table">
                <thead>
                    <tr className="header-row">
                        <th>Expense</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <ExpenseList newObj={newObj} />
            </table>
        </div>
    )
}

export default Table;