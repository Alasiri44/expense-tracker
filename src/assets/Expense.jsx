import React from "react";

// Renders a single expense row in the expenses table
function Expense({ user }) {
    return (
        <tr>
            <td>{user.expense}</td>       {/* Expense name */}
            <td>{user.description}</td>   {/* Description of the expense */}
            <td>{user.category}</td>      {/* Category (e.g., Food, Transport) */}
            <td>{user.amount}</td>        {/* Amount spent */}
            <td>{user.date}</td>          {/* Date of the expense */}
        </tr>
    );
}

export default Expense;