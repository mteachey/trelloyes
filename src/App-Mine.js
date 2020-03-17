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
