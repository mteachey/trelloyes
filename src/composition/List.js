//List Component
//renders a <section className="List"> containing <header> and <div className="List-cards">
//render a CARD COMP for each card in the cards array prop
 //each instance of CARD COMP passed 2 props(title, content) from this LIST COMP 

//accepts 2 props(header, cards) passed in for each List COMP from App COMP
 //header is a string of header of card to render
 //cards is a array of card objects
    //each object has a title and content

import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props){
    const cardList = props.cards.map((cardLetter,j)=>         
        <Card title={cardLetter.title} content={cardLetter.content} key={j}>
        </Card>
        );

    return(   
       
            <section className="List" key="0">
                <header className="List-header">
                    <h2>{props.header}</h2>
                </header>
                <div className="List-cards">
                  {cardList}  
                  <button type="button" className="List-add-button">
                    + Add Random Card
                  </button>   
                </div>
                        
           </section>   
       
    ) 
}

export default List;
