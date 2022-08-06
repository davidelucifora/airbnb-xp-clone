import React from 'react'
import Card from './card'
import data from '/src/data'
import App from '/src/App'


function CardsList() {
        
    const renderCards = data.map(card =>
    
        <Card 
        cardImage={card.imgUrl}
        stickerText = {card.stickerText}
        numberOfReviews = {card.numberOfReviews}
        location = {card.location}
        cardDescription = {card.cardDescription}
        price = {card.price}
        />  
    
    );
        return (
            <div className='cards-list'>
            {renderCards}    
            </div>
        )
}
export default CardsList
      