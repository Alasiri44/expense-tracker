import React from "react";
import Expense from "./Expense";

function ExpenseList({ newObj }) {
    if (newObj) {
        return (
            <tbody>
                {newObj.map((myObj, index) => {
                    return < Expense key={index} user={myObj} />
                })}                
            </tbody>
        );
    }
}

export default ExpenseList;