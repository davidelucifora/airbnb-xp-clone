import React from 'react'
import Card from './card'
import data from '/src/data'    
import App from '/src/App'


function CardsList() {
         
    const renderCards = data.map(card =>
    
        <Card 
        key = {card.id}
        card = {card}
        />  
    
    );
        return (
            <div className='cards-list'>
            {renderCards}    
            </div>
        )
}
export default CardsList
      