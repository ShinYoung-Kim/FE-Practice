import ProductTemplate from './ProductTemplate';
import './Template1List.scss';

const Template1List = ({ templates }) => {
    return (
        <div className="Template1List">
            {templates.map(template => (
                <ProductTemplate props={ template } key={ template.id }/>
            ))}
        </div>
    );
};

export default Template1List;