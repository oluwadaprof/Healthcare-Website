import React from 'react'
import heroImage from '../assets/trafalgar-header illustration 1.png'

function HeroSection() {
    return (
        <section>
            <div className='first-section'>
                <h1>
                    Virtual healthcare <br /> for you
                </h1>
                <p>Trafalgar provides progressive, and affordable<br /> 
                    healthcare, accessible on mobile and online <br />
                    for everyone</p>
                <button>Consult today</button>
            </div>
            


            <div className='second-section'>
                <img src={heroImage} alt="" />
            </div>
            
        </section>
    )
}

export default HeroSection;
