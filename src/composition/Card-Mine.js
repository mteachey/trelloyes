//Card Component
//render the div classname='Card', <h3> with cards' title, <p> with card's content
//accepts 2 props (title, content)  passed from List COMP

import React from 'react';
import './Card.css';

function Card(props){
    return(   
        <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>           
        </div>
    )
}

export default Card;

