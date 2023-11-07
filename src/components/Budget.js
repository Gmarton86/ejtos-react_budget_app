import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
   
    const handleBudgetChange = (event) => {
        const remaining = event.target.value - totalExpenses;
        if(remaining < 0) {
            alert('You cannot reduce the budget value lower than the spending')
        } else if (event.target.value > 20000) {
            alert(`Maximum budget is ${currency}20000`)
        }
        else {
            dispatch(({
                type: 'SET_BUDGET',
                payload: event.target.value,
            }));
        }
        
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<div>
    <span>{currency}</span>
    <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>

</div>
    );
};
export default Budget;