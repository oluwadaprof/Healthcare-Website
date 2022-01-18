import React from 'react'
import ArticleCard from './ArticleCard';
import ArticleImageOne from '../assets/image 2 (1).png';
import ArticleImageTwo from '../assets/image 2.png';
import ArticleImageThree from '../assets/image 3.png';

function Article() {
    return (
        <div className='article-section'>
            <h6>Check out our latest article</h6>
            <hr className='article--divider' />
            <div className="article--card__container">
                <ArticleCard image={ArticleImageOne}
                             title='Disease detection, check 
                             up in the laboratory' />
                <ArticleCard image={ArticleImageTwo}
                             title='Herbal medicines that are 
                             safe for consumption'/>
                <ArticleCard image={ArticleImageThree}
                              title='Natural care for healthy 
                              facial skin'/>
            </div>
            
        </div>
    )
}

export default Article;
