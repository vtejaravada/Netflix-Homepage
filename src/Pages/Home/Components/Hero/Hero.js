import React from 'react'

import '../Hero/Hero.css'
import Email from '../../../../Pages/Home/Components/Hero/Email/Email';

const Hero = () => {
  return (
    <>
        <div className="heroBanner">
            <div className="herotext">
                <h2 className="heading">Unlimited movies, TV shows and more</h2>
                <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <Email/>
        </div>
    </>
  )
}

export default Hero