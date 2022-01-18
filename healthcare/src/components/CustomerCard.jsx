import React from 'react';
import CustomerAvatar from '../assets/image 1.png'

function CustomerCard() {
    return (
        <div className='customer-card'>
            <h5>What our customer are saying</h5>
            <hr className='customer-divider'/>
            <div className='customer-card-flex'>
                <div className='customer--flex__one'>
                    <img className='customer-avatar' src={CustomerAvatar} alt="" />
                    <p className='customer-text'>Edward Newgate <br /> <span className='customer-span-text'>Founder Circle</span></p>
                </div>
                <div className='customer--flex__two'>
                    <p className='customer--text__quote'>“Our dedicated patient engagement app and <br /> 
                            web portal allow you to access information  <br /> instantaneously 
                            (no tedeous form, long calls,  <br /> 
                            or administrative hassle) and securely”</p>
                </div>
            </div>
            
        </div>
    )
}

export default CustomerCard;
