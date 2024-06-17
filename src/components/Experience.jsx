import PropTypes from "prop-types"
import { useState } from "react"

const Experience = ({ onSubmit }) => {
    const [expData, setExpData] = useState({
        company: "Tesla",
        jobTitle: "Principle Swag Engineer",
        startDate: "1998-08-15",
        endDate: "2024-08-15",
        location: "Dallas, TX",
        description: "Supported senior researchers on accessibility"+
        " standards for the open web. Created and usability tested "+
        "wireframes and prototypes. Produced interactive documentation"+
        " for quick onboarding of new researchers.",
      })

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
            <h1>Experience</h1>
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
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


Experience.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default Experience;