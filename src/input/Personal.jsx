import PropTypes from "prop-types"

const Personal = ({ personalData, setPersonalData }) => {
    const changeInputData = (e) => {
        const { name, value } = e.target;
        setPersonalData({...personalData, [name]: value});
    }

    return(
        <div className="personal-input">
            
            <h1>Personal Information</h1>
            <div className="input-info">
                <label>
                    First Name: 
                    <input
                        name="firstName"
                        type='text'
                        value={personalData.firstName}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    Last Name: 
                    <input
                        name="lastName"
                        type='text'
                        value={personalData.lastName}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    LinkedIn Link: 
                    <input
                        name="linkedIn"
                        type='text'
                        value={personalData.linkedIn}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    GitHub Link: 
                    <input
                        name="github"
                        type='text'
                        value={personalData.github}
                        onChange={changeInputData}
                    />
                </label>
            </div>
        </div>
    )
}

Personal.propTypes = {
    personalData: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      linkedIn: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
    }).isRequired,
    setPersonalData: PropTypes.func.isRequired,
};

export default Personal;