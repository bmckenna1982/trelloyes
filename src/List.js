import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    // const cardArray = props.cards;    
    return (
        <section className="List">
            <header className="List-header">                
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(card => (
                    <Card 
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        deleteCard={props.deleteCard}
                    />
                ))}
            </div>
            <button onClick={() => props.newCard(props.id)} type="button" className="List-add-button">
              + Add Random Card
            </button>
        </section>
        ); 
}

List.defaultProps = {
    cards: [],
    newCard: () => {},
}

export default List;