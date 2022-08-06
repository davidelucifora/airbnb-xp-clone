import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import data from './data'
import CardsList from './components/cardsList'

function App() {

  const cardsToRender = data.map(card =>
  
      <Card 
      cardImage={card.imgUrl}
      stickerText = {card.stickerText}
      numberOfReviews = {card.numberOfReviews}
      location = {card.location}
      cardDescription = {card.cardDescription}
      price = {card.price}
      />  
    )

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardsList />

    </div>
  )
}

export default App
