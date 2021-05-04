import React from 'react';
import { Card } from './card';
import './card-list.css';



export const CardList = (props) => {
    return(
        <div className="card-list">
            {
            props.monsters.map(el => <Card key={el.id} monster={el} /> )
            }
        </div>
    )
    
}

