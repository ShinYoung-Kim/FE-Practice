import Template1 from "./Template1";
import './Template1List.scss';

const Template1List = ({ templates }) => {
    return (
        <div className="Template1List">
            {templates.map(template => (
                <Template1 props={ template } key={ template.id }/>
            ))}
        </div>
    );
};

export default Template1List;