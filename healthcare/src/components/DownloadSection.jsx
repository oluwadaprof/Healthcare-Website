import React from 'react';
import LeadingHealthImage2 from '../assets/trafalgar-illustration sec03 1.png'

function DownloadSection() {
    return (
        <div className='section-three'> 
            <div className='third-section'>
            <h3>Leading healthcare providers</h3>
                <hr className='divider' />
                <p className='health-text'>Trafalgar provides progressive, and affordable <br /> healthcare, 
                    accessible on mobile and online for <br /> everyone. To us, it’s not just work. We take pride <br />
                    in the solutions we deliver
                </p>
            </div>
            <div className='fourth-section'>
                

                <img className='health-img' src={LeadingHealthImage2} alt="" />
                <button className='learn-more-btn2'>Download more</button>
            </div>
        </div>
    )
}

export default DownloadSection;
