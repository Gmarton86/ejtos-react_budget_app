import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch  } = useContext(AppContext);

    const [currency, setCurrency] = useState({name: 'Pound', symbol: '£'});

    const handleCurrencyChange = (event) => {
        const selectedCurrency = JSON.parse(event.target.value);
        setCurrency(selectedCurrency);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency.symbol
        })
      };
   

    return (
        <div className='row'>

        <div className="mb-3">
        <label htmlFor="inputGroupSelect01" className="form-label">Currency</label>
        <select
            className="form-select bg-success"
            id="inputGroupSelect01"
            onChange={handleCurrencyChange}
            value={JSON.stringify(currency)}
        >
            <option value={JSON.stringify({ name: 'Pound', symbol: '£' })}>£ Pound</option>
            <option value={JSON.stringify({ name: 'Dollar', symbol: '$' })}>$ Dollar</option>
            <option value={JSON.stringify({ name: 'Euro', symbol: '€' })}>€ Euro</option>
            <option value={JSON.stringify({ name: 'Ruppee', symbol: '₹' })}>₹ Ruppee</option>
        </select>
        </div>


    </div>
    );
};

export default Currency;
