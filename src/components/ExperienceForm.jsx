import PropTypes from "prop-types"
import { useState, useEffect } from "react"

const ExperienceForm = ({ initialData, onSubmit, onCancel }) => {
    const [expData, setExpData] = useState({
        company: initialData.company || "",
        jobTitle: initialData.jobTitle || "",
        startDate: initialData.startDate || "",
        endDate: initialData.endDate || "",
        location: initialData.location || "",
        description: initialData.description || "",
    })

    useEffect(() => {
        setExpData({
            company: initialData.company || "",
            jobTitle: initialData.jobTitle || "",
            startDate: initialData.startDate || "",
            endDate: initialData.endDate || "",
            location: initialData.location || "",
            description: initialData.description || "",
        });
    }, [initialData]);

    const changeInputData = (e) => {
        const { name, value } = e.target;
        setExpData({...expData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(expData);
        setExpData({
            company: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
        });
    }

    return (
        <div className="exp">
            <form className="input-info" onSubmit={handleSubmit}>
                <label>
                    Company: 
                    <input
                        name="company"
                        type='text'
                        value={expData.company}
                        onChange={changeInputData}
                        placeholder="Enter Company Name"
                    />
                </label>
                <label>
                    Position Title: 
                    <input
                        name="jobTitle"
                        type='text'
                        value={expData.jobTitle}
                        onChange={changeInputData}
                        placeholder="Enter Position Title"
                    />
                </label>
                <label>
                    Start date: 
                    <input
                        name="startDate"
                        type='date'
                        value={expData.startDate}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    End date: 
                    <input
                        name="endDate"
                        type='date'
                        value={expData.endDate}
                        onChange={changeInputData}
                    />
                </label>
                <label>
                    Location: 
                    <input
                        name="location"
                        type='text'
                        value={expData.location}
                        onChange={changeInputData}
                        placeholder="ex) City, Country"
                    />
                </label>
                <label>
                    Description: 
                    <textarea
                        name="description"
                        type='text'
                        value={expData.description}
                        onChange={changeInputData}
                        placeholder="Describe your role"
                    />
                </label>
                <div className="buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}



ExperienceForm.propTypes = {
    initialData: PropTypes.shape({
        company: PropTypes.string,
        jobTitle: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        location: PropTypes.string,
        description: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};


export default ExperienceForm;