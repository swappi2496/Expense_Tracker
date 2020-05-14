import React from 'react';
import {Header} from './compnents/Header';
import {Balance} from './compnents/Balance';
import {Incomeexpense} from './compnents/Incomeexpense';
import {TransactionList} from './compnents/TransactionList';
import {AddTransaction} from './compnents/AddTransaction';
import {GlobalProvider} from './context/Globalstate';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <Incomeexpense/>
        <TransactionList/>
        <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
