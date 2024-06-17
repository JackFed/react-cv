import PropTypes from 'prop-types';
import "../styles/Display.css"

const Display = ({ personalData, eduData }) => {
    return (
        <div className="display">
            <div className="personal">
              <div>{personalData.name}</div>
              <div>{personalData.email}</div>
              <div>{personalData.linkedIn}</div>
              <div>{personalData.github}</div>
            </div>
            <div className="education">
              <h1>Education</h1>
              {eduData.map((edu, index) => 
                (
                <div key={index}>
                  <div>University: {edu.school}</div>
                  <div>Major: {edu.major}</div>
                  <div>GPA: {edu.gpa}</div>
                  <div>{edu.startDate} - {edu.gradDate}</div>
                </div>
              ))}
            </div>
            <div className="experience">
              
            </div>
        </div>
    );
}

Display.propTypes = {
      personalData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
        linkedIn: PropTypes.string,
        github: PropTypes.string,
      }).isRequired,
      eduData: PropTypes.arrayOf(PropTypes.shape({
        school: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        gpa: PropTypes.string,
        startDate: PropTypes.string,
        gradDate: PropTypes.string,
    })).isRequired,
};

export default Display;