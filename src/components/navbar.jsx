import React from 'react'
import AirbnbLogo from './../assets/airbnb-logo.svg'


function Navbar(){
    return (
        <nav>
            <img src={AirbnbLogo} alt="Airbnb Experiences" width="82px" />
        </nav>
    )
}

export default Navbar 