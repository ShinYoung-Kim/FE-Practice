import { useState } from 'react';
import './ProductTemplate.scss';
import TextContentList from './TextContentList';

const ArticleTemplate = ( {props} ) => {
    const {url, img, title, id, type, price, site} = props;
    const [hover, setHover] = useState(false);
    return (
        <div className='ArticleTemplate'>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="Template1Main">
                <div className='TemplateHeader'>
                    <div className={`${hover ? 'TemplateMediaOverlay hover' : 'TemplateMediaOverlay'}`}>
                        <img className={`${hover ? 'templateMedia hover' : 'templateMedia'}`} src={ img } alt='templateMedia' />
                    </div>
                <div className={`${hover ? 'templateCommonArea hover' : 'templateCommonArea'}`}>
                    <div className='templateType'>{ type }</div>
                    <div className='templateTitle'>{ title }</div>
                </div>
            </div>
                <div className='templateCustomArea'>
                    <div className='siteName'>
                        {site}
                    </div>
                    <div className='productPrice'>{ price }</div>
                </div>
            </div>
        </div>
    ); 
};

export default ArticleTemplate;