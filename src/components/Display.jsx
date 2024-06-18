import PropTypes from 'prop-types';
import "../styles/Display.css"
import { DateTime } from "luxon";


const Display = ({ personalData, eduData, expData }) => {
    const prettyDate = (date) => {
      return DateTime.fromISO(date).toLocaleString({ month: 'long', year: 'numeric' });
    }
    
    return (
        <div className="display">
            <div className="personal">
              <h1>{personalData.name}</h1>
              <div className="contact-info">
                {(personalData.email !== "") && <div>{personalData.email}</div>}
                {(personalData.linkedIn !== "") && <div>{personalData.linkedIn}</div>}
                {(personalData.github !== "") && <div>{personalData.github}</div>}
              </div>
            </div>
            <div className="education">
              {eduData.length > 0 && <h1>Education</h1>}
              {eduData.map((edu, index) => 
                (
                <div className="uni-info" key={index}>
                  <div className="institution">{edu.school}</div>
                  <div className='major'>{edu.major}</div>
                  {(edu.gpa !== "") && <div className='gpa'>GPA: {edu.gpa}/4.00</div>}
                  <div className="date">{prettyDate(edu.startDate)} - {prettyDate(edu.gradDate)}</div>
                </div>
                )
              )}
            </div>
            <div className="experience">
              {expData.length > 0 && <h1>Experience</h1>}
              {expData.map((exp, index) => 
                (
                  <div className="info" key={index}>
                    <div className="institution">{exp.company}</div>
                    <div className="role">{exp.jobTitle}</div>
                    <div className="date">{prettyDate(exp.startDate)} - {prettyDate(exp.endDate)}</div>
                    <div className="location">{exp.location}</div>
                    <div className="desc">{exp.description}</div>
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
        startDate: PropTypes.string.isRequired,
        gradDate: PropTypes.string.isRequired,
    })).isRequired,
    expData: PropTypes.arrayOf(PropTypes.shape({
      company: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
    })).isRequired,
};

export default Display;