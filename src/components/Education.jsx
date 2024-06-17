import PropTypes from "prop-types"
import { useState } from "react"

const Education = ({ onSubmit }) => {
    const [eduData, setEduData] = useState({
        school: "Harvard University",
        major: "Bidness",
        gpa: "3.99",
        startDate: "2024-08-15",
        gradDate: "2028-05-15",
      })

    const changeInputData = (e) => {
        const { name, value } = e.target;
        setEduData({...eduData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(eduData);
        setEduData({
            school: "",
            major: "",
            gpa: "",
            startDate: "",
            gradDate: "",
        });
    }

    return (
        <div className="edu">
            <h1>Education</h1>
            <form className="input-info" onSubmit={handleSubmit}>
                <label>
                    University: 
                    <input
                        name="school"
                        type='text'
                        value={eduData.school}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    Major: 
                    <input
                        name="major"
                        type='text'
                        value={eduData.major}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    GPA: 
                    <input
                        name="gpa"
                        type='text'
                        value={eduData.gpa}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    Start date: 
                    <input
                        name="startDate"
                        type='date'
                        value={eduData.startDate}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    Graduation date: 
                    <input
                        name="gradDate"
                        type='date'
                        value={eduData.gradDate}
                        onChange={changeInputData}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


Education.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default Education;