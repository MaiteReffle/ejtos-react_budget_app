import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency,dispatch,remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget>20000) {
            alert(`The budget cannot exceed ${currency}20,000`)

        }
        //else if (newBudget<remaining) { 
        //    alert(`The budget cannot exceed the remaining founds ${remaining}`)
        
        //}
        else if (newBudget<budget-remaining) {
            alert(`You cannot reduce the budget lower than the spent so far. Spent so far:  ${currency}${budget-remaining}`)

        }
        else {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;