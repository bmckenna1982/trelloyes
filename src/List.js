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
                        title={card.title}
                        content={card.content}
                    />
                ))}
            </div>
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>
        </section>
        ); 
}

export default List;