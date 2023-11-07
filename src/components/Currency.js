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
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency({currency.symbol} {currency.name})</label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        onChange={handleCurrencyChange}
                        value={JSON.stringify(currency)} // Set the value to the stringified JSON
                    >
                        <option value={JSON.stringify({ name: 'Pound', symbol: '£' })}>£ Pound</option>
                        <option value={JSON.stringify({ name: 'Dollar', symbol: '$' })}>$ Dollar</option>
                        <option value={JSON.stringify({ name: 'Euro', symbol: '€' })}>€ Euro</option>
                        <option value={JSON.stringify({ name: 'Ruppee', symbol: '₹' })}>₹ Ruppee</option>
                    </select>

                </div>
            </div>

        </div>
    );
};

export default Currency;
