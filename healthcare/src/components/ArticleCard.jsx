import React from 'react'


function ArticleCard({image, title, content}) {
    return (
        <div className='article--card'>
            <img className='article--card__image' src={image} alt="" />
            <h6 className='article--card__title'>{title}</h6>
            <p>{content}</p>
            
        </div>
    )
}

export default ArticleCard;
