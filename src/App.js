import React from 'react';
import './App.css';
import List from './List'
import STORE from './store'


function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
 state = {
    store: STORE,
  };

  newCard = (listId) => {
    const newCard = newRandomCard()
    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]          
        };
      }
      return list;
    })

    this.setState( {
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards, 
          [newCard.id]: newCard
        }
      }
    })
  }
  deleteCard = (cardId) => {
    const newObj = omit(this.state.store.allCards, cardId)
    //delete this.state.store.allCards[cardId]
    const newList = this.state.store.lists.map((list) => {
      list.cardIds = list.cardIds.filter((id) => id !== cardId)
      return list
    })
    this.setState( {
      store: {
        lists: newList,
        allCards: newObj
      }
    } )   
    
  }

  render() {
    const {store} = this.state
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List 
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              newCard={this.newCard}
              deleteCard={this.deleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
