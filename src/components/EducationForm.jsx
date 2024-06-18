import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import "../styles/Form.css"

const EducationForm = ({ initialData, onSubmit, onCancel }) => {
    const [eduData, setEduData] = useState({
        school: initialData.school || "",
        major: initialData.major || "",
        gpa: initialData.gpa || "",
        startDate: initialData.startDate || "",
        gradDate: initialData.gradDate || "",
    })

    useEffect(() => {
        setEduData({
            school: initialData.school || "",
            major: initialData.major || "",
            gpa: initialData.gpa || "",
            startDate: initialData.startDate || "",
            gradDate: initialData.gradDate || ""
        });
    }, [initialData]);

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
            <form className="input-info" onSubmit={handleSubmit}>
                <label>
                    School: 
                    <input
                        name="school"
                        type='text'
                        value={eduData.school}
                        onChange={changeInputData}
                        placeholder="Enter a school / university"
                    />
                </label>
                <label>
                    Major: 
                    <input
                        name="major"
                        type='text'
                        value={eduData.major}
                        onChange={changeInputData}
                        placeholder="ex) B.S. in Fine Arts"
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
                <div className="buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
    )
}


EducationForm.propTypes = {
    initialData: PropTypes.shape({
        school: PropTypes.string,
        major: PropTypes.string,
        gpa: PropTypes.string,
        startDate: PropTypes.string,
        gradDate: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EducationForm;