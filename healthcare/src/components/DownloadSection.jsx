import React from 'react';
import LeadingHealthImage2 from '../assets/trafalgar-illustration sec03 1.png'

function DownloadSection() {
    return (
        <div className='section-four'> 
            <div className='fourth-section'>
            <h4>Download our <br /> mobile apps</h4>
                <hr className='divider2' />
                <p className='download-text'>Trafalgar provides progressive, and affordable <br /> healthcare, 
                    accessible on mobile and online for <br /> everyone. To us, it’s not just work. We take pride <br />
                    in the solutions we deliver
                </p>
                <button className='download-btn'>Download more</button>
            </div>
            <div className='fifth-section'>
                <img className='download-img' src={LeadingHealthImage2} alt="" />
                
            </div>
        </div>
    )
}

export default DownloadSection;
