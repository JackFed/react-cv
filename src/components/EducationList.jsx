import PropTypes from "prop-types";
import "../styles/EducationList.css"

const EducationList = ({ eduData, onEdit, onRemove, onAdd }) => {
    return (
        <div className="schools">
            {eduData.map((edu, index) => (
                <div key={index} className="school-item">
                    <div>{edu.school}</div>
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onRemove(index)}>Remove</button>
                </div>
            ))}
            <button onClick={onAdd}>Add Education</button>
        </div>
    );
}

EducationList.propTypes = {
    eduData: PropTypes.arrayOf(PropTypes.shape({
        school: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        gpa: PropTypes.string,
        startDate: PropTypes.string,
        gradDate: PropTypes.string,
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default EducationList;
