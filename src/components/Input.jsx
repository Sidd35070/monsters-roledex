import React from 'react';
import './search-box.styles.css';

export const Input = ({placeholder, changeFunction}) =>{
    return(
        <input className="search" type="search" placeholder={placeholder} onChange={changeFunction} />
    )
}