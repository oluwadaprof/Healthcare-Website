import React from 'react'
import ServiceBox from './ServiceBox';



function OurServices() {
    return (
        <div className='our-services'>
            <h2>Our Services</h2>
            <hr />
            <p className='ourservice-text'>
            We provide to you the best choiches for you. Adjust it to your health needs and make sure 
            your undergo treatment <br /> <span>with our highly 
            qualified doctors you can consult with us which type of service is suitable for your health</span>
            </p>
            <div className="service-container">
                <ServiceBox name='tobi' />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
            </div>
            <button className='learn-more-btn'>Learn more</button>
        </div>
    )
}

export default OurServices;
