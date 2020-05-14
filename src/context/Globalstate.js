import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// initialstate
const initialstate = {
    transactions: []
}

// createcontext
export const GlobalContext=createContext(initialstate);

// Provider Component
export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialstate);

// Action
function deleteTransaction(id){
    dispatch({
        type : 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transactions){
    dispatch({
        type : 'ADD_TRANSACTION',
        payload: transactions
    });
}

    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}