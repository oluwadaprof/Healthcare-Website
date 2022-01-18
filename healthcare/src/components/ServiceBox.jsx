import React from 'react'


function ServiceBox({icon, header , text }) {
    return (
        <div className='service-box'>
            <img className='icons' src={icon} alt="" />
            <p className='service-box__header'>{header}</p>
            <p className='service-box__sub--text'>{text}</p>
            
        </div>
    )
}

export default ServiceBox;
