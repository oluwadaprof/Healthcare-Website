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
                             up in the laboratory' 
                             content='In this case, the role of the health laboratory is very important to do
                             a disease detection...'/>
                <ArticleCard image={ArticleImageTwo}
                             title='Herbal medicines that are 
                             safe for consumption'
                             content='Herbal medicine is very widely used at 
                             this time because of its very good for your health...'/>
                <ArticleCard image={ArticleImageThree}
                              title='Natural care for healthy 
                              facial skin'
                              content='A healthy lifestyle should start from now and also for your skin health.
                              There are some...'/>
            </div>
            <button className='view-all-btn'>View all</button>
            
        </div>
    )
}

export default Article;
