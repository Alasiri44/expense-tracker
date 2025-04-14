import React, {useState} from 'react'
import Header from './assets/Header'
import AddExpense from './assets/addExpense'
import Table from './assets/Table'
import './App.css'

function App() {
  let itemsObjectArray = [];
  let expenseObject = [];
  const [searchItem, setSearchItem] = useState('');
  const [myExpenses, setMyExpenses] = useState(expenseObject);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const expense = formData.get('expense');
    const description = formData.get('description');
    const category = formData.get('category');
    const amount = formData.get('amount');
    const date = formData.get('date');

    const myObject = {
      'expense': expense,
      'description': description,
      'category': category,
      'amount': amount,
      'date': date
    }

    const existingObjects = [...myExpenses, myObject];
    itemsObjectArray = [...itemsObjectArray, existingObjects]
    setMyExpenses(myExpenses => existingObjects);    
            
  }
  
  function handleFilter(event){
    event.preventDefault();

    const filter = event.target.value
      
    setSearchItem(filter);

    const filteredExpenses = myExpenses.filter((myExpense) => {  
              
        if(myExpense.expense.toLowerCase().includes(filter.toLowerCase()) ||
        myExpense.description.toLowerCase().includes(filter.toLowerCase())){
          return true;
        }else if(filter.length === 0){
          return true;
        }
    })
    
    setSearchItem(searchItem => filteredExpenses)
    
  }


let items;
  if(searchItem === ''){
    items = myExpenses.filter((myExpense) => {
      return true;
    })
  }else{
    items = [...searchItem];
  }
  

  return (
    <>
      <div>
       
          <Header />
          <AddExpense handleSubmitFunction={handleSubmit} />
          <Table newObj={items} handleFilterFunction={handleFilter} />       
      </div>
    </>
  )
}

export default App;
