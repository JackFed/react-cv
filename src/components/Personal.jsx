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
                        value={personalData.name || ""}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    E-mail: 
                    <input
                        name="email"
                        type='email'
                        value={personalData.email || ""}
                        onChange={changeInputData}
                        placeholder="example@domain.com"
                    />
                </label>
                <label>
                    LinkedIn Username: 
                    <input
                        name="linkedIn"
                        type='text'
                        value={personalData.linkedIn || ""}
                        onChange={changeInputData}
                        placeholder="Enter your LinkedIn username"
                    />
                </label>
                <label>
                    GitHub Username: 
                    <input
                        name="github"
                        type='text'
                        value={personalData.github || ""}
                        onChange={changeInputData}
                        placeholder="Enter your GitHub username"
                    />
                </label>
            </div>
        </div>
    )
}

Personal.propTypes = {
    personalData: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      linkedIn: PropTypes.string,
      github: PropTypes.string,
    }).isRequired,
    setPersonalData: PropTypes.func.isRequired,
};

export default Personal;