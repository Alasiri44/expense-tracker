import React from 'react'
import Header from './assets/Header'
import AddExpense from './assets/addExpense'
import Table from './assets/Table'
import './App.css'

function App() {
  function handleSubmit(){

  }
  return (
    <>
      <div>
        <Header />
        <AddExpense handleSubmitFunction={handleSubmit} />
        <Table />
      </div>
    </>
  )
}

export default App
