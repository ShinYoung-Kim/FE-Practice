import ArticleTemplate from './ArticleTemplate';
import './Template1List.scss';

const Template1List = ({ templates }) => {
    return (
        <div className="Template1List">
            {templates.map(template => (
                <ArticleTemplate props={ template } key={ template.id }/>
            ))}
        </div>
    );
};

export default Template1List;