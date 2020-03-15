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
    
    /*const STORETESTLIST = {
        lists: [
          {
            id: '1',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
          },
          {
            id: '2',
            header: 'Second list',
            cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
          },
          {
            id: '3',
            header: 'Third list',
            cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
          },
          {
            id: '4',
            header: 'Fourth list',
            cardIds: [ 'l', 'm' ],
          },
        ],
        allCards: {
          'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
          'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
          'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
          'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
          'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
          'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
          'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
          'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
          'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
          'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
          'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
          'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
          'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
        },
      }*/
    
    
    /*const cardArray = STORETEST.lists[props.listNumber].cardIds;
     
      const cardList = cardArray.map(cardLetter=>
          <div className="Card" key={STORETEST.allCards[cardLetter].id}>
              <button type="button">delete</button>
              <h3>
                  {STORETEST.allCards[cardLetter].title}
              </h3>
              <p>
                   {STORETEST.allCards[cardLetter].content}
              </p>
          </div>*/
    
    function List(props){
        console.log('Checking if this works');
        console.log(`List ${props.cards.a.title}`);
        console.log(listArray[0].cardIds[0]);  /*this needs to combine with the props.cards it's the a*/
        //const cardArray = props.header[index].cardIds;
       
        //const listArray = STORETESTLIST.lists;
        const listArray = props.header;
        
        const eachList = listArray.map((list,i)=>
            
            <section className="List" key={list.id}>
                <header className="List-header">
                    <h2>{list.header}</h2>
                </header>
                <Card listNumber={i} cards={props.cards}></Card>
               
            </section>
                       
        ); 
    
        return(
            <div className="App-list">
                   {eachList}         
           </div>
        ) 
    }
    
    export default List;
    