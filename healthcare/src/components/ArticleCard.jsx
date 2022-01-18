import React from 'react'


function ArticleCard({image, title, content}) {
    return (
        <div className='article--card'>
            <img className='article--card__image' src={image} alt="" />
            <h6 className='article--card__title'>{title}</h6>
            <p className='article--card__content'>{content}</p>
            <p className='read--more'>Read more</p>
            
        </div>
    )
}

export default ArticleCard;
