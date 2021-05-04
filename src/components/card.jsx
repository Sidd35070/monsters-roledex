import React from 'react';
import './card.styles.css';

export const Card = ({monster}) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt=""/>
            <h1 key={monster.id}>{monster.name}</h1>
        </div>
    )
}