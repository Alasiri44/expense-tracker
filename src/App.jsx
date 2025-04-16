import React, { useState } from 'react'
import Header from './assets/Header'
import AddExpense from './assets/addExpense'
import Table from './assets/Table'
import './App.css'

function App() {
  // Placeholder arrays (not actively used in rendering)
  let itemsObjectArray = [];
  let expenseObject = [];

  // State to track current search input and list of expenses
  const [searchItem, setSearchItem] = useState('');
  const [myExpenses, setMyExpenses] = useState(expenseObject);

  // Handles form submission to add a new expense
  function handleSubmit(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const expense = formData.get('expense');
    const description = formData.get('description');
    const category = formData.get('category');
    const amount = formData.get('amount');
    const date = formData.get('date');

    // Create a new expense object
    const myObject = {
      'expense': expense,
      'description': description,
      'category': category,
      'amount': amount,
      'date': date
    }

    // Add new expense to the current list and update state
    const existingObjects = [...myExpenses, myObject];
    itemsObjectArray = [...itemsObjectArray, existingObjects]
    setMyExpenses(myExpenses => existingObjects);

  }

  // Handles search input and filters expenses
  function handleFilter(event) {
    event.preventDefault();

    const filter = event.target.value

    setSearchItem(filter);

    // Filter expenses by expense name or description
    const filteredExpenses = myExpenses.filter((myExpense) => {

      if (myExpense.expense.toLowerCase().includes(filter.toLowerCase()) ||
        myExpense.description.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      } else if (filter.length === 0) {
        return true;
      }
    })

    // Update search state with filtered results
    setSearchItem(searchItem => filteredExpenses)

  }

  // Determine which items to display in the table based on search
  let items;
  if (searchItem === '') {
    items = myExpenses.filter((myExpense) => {
      return true;
    })
  } else {
    items = [...searchItem];
  }


  return (
    <>
      <div className='app'>

        {/* App header */}
        <Header />
        <div id='content-container'>
          {/* Expense form */}
          <AddExpense handleSubmitFunction={handleSubmit} />

          {/* Table with filtered or full expense list */}
          <Table newObj={items} handleFilterFunction={handleFilter} />
        </div>
      </div>
    </>
  )
}

export default App;
