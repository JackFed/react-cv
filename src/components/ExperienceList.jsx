import PropTypes from "prop-types";
import "../styles/ExperienceList.css"

const ExperienceList = ({ expData, onEdit, onRemove, onAdd }) => {
    return (
        <div className="jobs">
            {expData.map((exp, index) => (
                <div key={index} className="job-item">
                    <div>{exp.company}</div>
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onRemove(index)}>Remove</button>
                </div>
            ))}
            <button onClick={onAdd}>Add Experience</button>
        </div>
    );
}

ExperienceList.propTypes = {
    expData: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        location: PropTypes.string,
        description: PropTypes.string,
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ExperienceList;
