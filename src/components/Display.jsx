import PropTypes from 'prop-types';
import "../styles/Display.css"

const Display = ({ personalData, eduData, expData }) => {
    return (
        <div className="display">
            <div className="personal">
              <div>{personalData.name}</div>
              <div>{personalData.email}</div>
              <div>{personalData.linkedIn}</div>
              <div>{personalData.github}</div>
            </div>
            <div className="education">
              {eduData.map((edu, index) => 
                (
                <div key={index}>
                  <div>University: {edu.school}</div>
                  <div>Major: {edu.major}</div>
                  <div>GPA: {edu.gpa}</div>
                  <div>{edu.startDate} - {edu.gradDate}</div>
                </div>
                )
              )}
            </div>
            <div className="experience">
              {expData.map((exp, index) => 
                (
                  <div key={index}>
                    <div>{exp.company}</div>
                    <div>{exp.jobTitle}</div>
                    <div>{exp.startDate} - {exp.endDate}</div>
                    <div>{exp.location}</div>
                    <div>{exp.description}</div>
                  </div>
                )
              )}
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
    expData: PropTypes.arrayOf(PropTypes.shape({
      company: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
    }))
};

export default Display;