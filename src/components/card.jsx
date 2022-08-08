import React from 'react'
import Star from './../assets/star.svg'

function Card({card}){

        let badgeText
        if (card.openSpots === 0){
            badgeText = 'Sold Out'
        }
        else if (card.location === 'Online') {
            badgeText = "Online"
        }

    return (
    <div id="card">
        <img src={card.imgUrl}  className="card-img"/>
        <div className="little-sticker">{badgeText}</div>
        <div id="card-desc">
            <div id="rating-location">
                <img src={Star}></img>
                <p>{card.reviewRating}</p>
                <p id="reviews">({card.numberOfReviews})</p>
                <p id="location">{card.location}</p>
            </div>
            <p id="card-description">{card.cardDescription}</p>
            <p id="pricing"><span className="bold">From {card.price}$</span> / person</p>
        </div>
    </div>
    )
}

export default Card