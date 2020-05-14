import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/Globalstate';

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}= useContext(GlobalContext);

    const onsubmit = e => {
        e.preventDefault();

        const newTransaction ={
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>
                Add New AddTransaction
            </h3>
            <form onSubmit={onsubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...'/>
            </div>
            <div classsName='form-control'>
                <label htmlFor='amount'>Amount <br/>
                (negative-expense, positive-income)
                </label>
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter anount...'/>
            </div>
            <button className='btn'>Add Transaction </button>
            </form>
        </>
    )
}
