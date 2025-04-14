import React, { useContext } from "react";


function Expense({user}) {
        
    return (
        <tr>
            <td>{user.expense}</td>
            <td>{user.description} </td>
            <td>{user.category} </td>
            <td>{user.amount} </td>
            <td>{user.date} </td>
        </tr>
    );
}

export default Expense;