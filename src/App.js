//render the <main> a <header> with <h1> and <div className='App-list'>
// and render a LIST COMP for each item in store.lists array
  //each instance of LIST COMP passed two props(header, cards)
    //header prop is string for List's header
    //cards prop is array of card objects (combine cardId array list with allCards object)
//accepts 1 prop (store)
  //store prop is object with 2 keys (lists, allCards)
    //lists array of objects {id:, header:, cardIds:}
    //allCards is an object with key : value cardID : {id:, title:, content:}

import React from 'react';
import './App.css';
import List from './composition/List.js';
import STORE from './composition/store.js';

const cardList = (
  STORE.lists.map(function(list,i){
    const allCardsforLists = list.cardIds.map(card=>
      STORE.allCards[card]);
   return(
     
    <List cards={allCardsforLists} header={list.header} key={i}>
    ipsum
    </List>)}
  )//end of map
)

function App() {
  return (
   <main className='App'>
      <header className="App-header">
         <h1>Trelloyes!</h1>
      </header> 
     <div className='App-list'>
       {cardList}                     {/* this repeats for each STORE.list item */}
     </div>

   </main>
  );
}

export default App;
