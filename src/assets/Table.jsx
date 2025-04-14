import React from "react";
import ExpenseList from "./ExpenseList";
import SearchBar from "./Searchbar";

function Table({newObj, handleFilterFunction}){
    return (
        <div>
            <SearchBar handleFilterFunction={handleFilterFunction}/>
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