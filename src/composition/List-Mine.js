//List Component
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
