import React from 'react'
import HeroImage from './../assets/hero-image.png'

function Hero(){
 
 return (   <div className="hero">
        <img src={HeroImage} alt="Onlien Experiences" />
        <h1>Online Experiences</h1>
        <h5>Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</h5>
    </div>)
}

export default Hero