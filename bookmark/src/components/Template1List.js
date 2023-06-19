import VideoTemplate from './VideoTemplate';
import './Template1List.scss';

const Template1List = ({ templates }) => {
    return (
        <div className="Template1List">
            {templates.map(template => (
                <VideoTemplate props={ template } key={ template.id }/>
            ))}
        </div>
    );
};

export default Template1List;