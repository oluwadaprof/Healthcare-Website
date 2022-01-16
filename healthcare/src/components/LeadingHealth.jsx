import React from 'react'
import LeadingHealthImage from "../assets/trafalgar-illustration sec02 1.png"

function LeadingHealth() {
    return (
        <div className='section'> 
            <div className='first-section'>
                <img className='health-img' src={LeadingHealthImage} alt="" />
            </div>
            <div className='second-section'>
                <h3>Leading healthcare providers</h3>
                <hr className='divider' />
                <p className='health-text'>Trafalgar provides progressive, and affordable <br /> healthcare, 
                    accessible on mobile and online for <br /> everyone. To us, it’s not just work. We take pride <br />
                    in the solutions we deliver
                </p>
                <button className='learn-more-btn2'>Learn more</button>
            </div>
        </div>
    )
}

export default LeadingHealth;
