import PropTypes from "prop-types"

const Personal = ({ data, setData }) => {
    
    const handleFirstNameChange = (e) => {
        setData({...data, personal: {...data.personal, firstName: e.target.value}});
    }

    const handleLastNameChange = (e) => {
        setData({...data, personal: {...data.personal, lastName: e.target.value}});
    }

    return(
        <div className="input-info">
            <label>
                First Name: 
                <input
                    type='text'
                    value={data.personal.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name: 
                <input
                    type='text'
                    value={data.personal.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </div>
    )
}

Personal.propTypes = {
    data: PropTypes.shape({
      personal: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    setData: PropTypes.func.isRequired,
};

export default Personal;