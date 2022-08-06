import React from 'react'
import Star from './../assets/star.svg'
import data from './../data'

function Card({
    stickerText, 
    cardImage,
    reviewRating,
    numberOfReviews,
    location,
    cardDescription,
    price }){

    return (
    <div id="card">
        <img src={cardImage} />
        <div id="little-sticker">{stickerText}</div>
        <div id="card-desc">
            <div id="rating-location">
                <img src={Star}></img>
                <p>{reviewRating}</p>
                <p id="reviews">({numberOfReviews})</p>
                <p id="location">{location}</p>
            </div>
            <p id="card-description">{cardDescription}</p>
            <p id="pricing"><span className="bold">From {price}$</span> / person</p>
        </div>
    </div>
    )
}

export default Card