import React, {useState} from 'react'
import Header from './assets/Header'
import AddExpense from './assets/addExpense'
import Table from './assets/Table'
import './App.css'

function App() {
  let expenseObject = {};
  const [myExpenses, setMyExpenses] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const expense = formData.get('expense');
    const description = formData.get('description');
    const category = formData.get('category');
    const amount = formData.get('amount');
    const date = formData.get('date');

    expenseObject = {
      'expense': expense,
      'description': description,
      'category': category,
      'amount': amount,
      'date': date
    }

    setMyExpenses(myExpenses => expenseObject);    
    
  }
 

  return (
    <>
      <div>
       
          <Header />
          <AddExpense handleSubmitFunction={handleSubmit} />
          <Table newObj={myExpenses} />       
      </div>
    </>
  )
}

export default App
