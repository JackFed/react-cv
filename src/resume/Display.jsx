import PropTypes from 'prop-types';

const Display = ({ personalData, eduData }) => {
    return (
        <div className="display">
            <div className="personal">
              <div>{personalData.firstName}</div>
              <div>{personalData.lastName}</div>
              <div>{personalData.linkedIn}</div>
              <div>{personalData.github}</div>
            </div>
            {eduData && (<div className="education">
              <div>{eduData.school}</div>
              <div>{eduData.major}</div>
              <div>{eduData.gpa}</div>
              <div>{eduData.startDate}</div>
              <div>{eduData.gradDate}</div>
            </div>)}
        </div>
    );
}

Display.propTypes = {
      personalData: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        linkedIn: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
      }).isRequired,
      eduData: PropTypes.shape({
        school: PropTypes.string.isRequired,
        major:  PropTypes.string.isRequired,
        gpa: PropTypes.string,
        startDate: PropTypes.string,
        gradDate: PropTypes.string,
    }),
};

export default Display;