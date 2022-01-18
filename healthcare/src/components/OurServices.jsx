import React from 'react'
import ServiceBox from './ServiceBox';
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';
import frame4 from '../assets/Frame4.png';
import frame5 from '../assets/Frame5.png';
import frame6 from '../assets/Frame6.png';



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
                <ServiceBox header='Search Doctor' 
                            text='Choose your doctor from thousands  of specialist, general, and trusted  hospitals'
                            icon={frame1}/>
                <ServiceBox header='Online pharmacy'
                            text='Buy  your medicines with our mobile application with a simple delivery system' 
                            icon={frame2}/>
                <ServiceBox header='Consultation'
                            text='Free consultation with our trusted doctors and get the best recomendations'
                            icon={frame3}/>
                <ServiceBox header='Details Info'
                            text='Free consultation with our trusted doctors and get the best recomendations'
                            icon={frame4}/>
                <ServiceBox header='Emergency Care'
                            text='You can get 24/7 urgent care for yourself or your children and your lovely family'
                            icon={frame5}/>
                <ServiceBox header='Tracking'
                            text='Track and save your medical history and health data '
                            icon={frame6}/>
            </div>
            <button className='learn-more-btn'>Learn more</button>
        </div>
    )
}

export default OurServices;
