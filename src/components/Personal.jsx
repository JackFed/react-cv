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
                    Full Name: 
                    <input
                        name="name"
                        type='text'
                        value={personalData.name}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    E-mail: 
                    <input
                        name="email"
                        type='email'
                        value={personalData.email}
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
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      linkedIn: PropTypes.string,
      github: PropTypes.string,
    }).isRequired,
    setPersonalData: PropTypes.func.isRequired,
};

export default Personal;