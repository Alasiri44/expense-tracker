import React from "react";

function Expense({expense, description, category, amount, date}) {
    return (
        <tr>
            <td>{expense}</td>
            <td>{description} </td>
            <td>{category} </td>
            <td>{amount} </td>
            <td>{date} </td>
        </tr>
    );
}

export default Expense;