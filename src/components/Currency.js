import React,{useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Currency=()=>{

let {dispatch}=useContext(AppContext);

const chgCurrency=(event)=>{
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });
}

return(
<div className='form-row'>
    <div className='form-floating'>
        <select className="form-select" id="Currency" onChange={chgCurrency}>
            <option value="£" name="Pound">£ Pound</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Rupee">₹ Rupee</option>
        </select>
        <label for='Currency'>Currency </label>
    </div>
</div>
);
};

export default Currency;