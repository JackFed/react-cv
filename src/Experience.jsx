import { useState } from "react";
import PropTypes from "prop-types";
import ExperienceList from './components/ExperienceList';
import ExperienceForm from './components/ExperienceForm';
import "./styles/Experience.css"

const Experience = ({expData, setExpData}) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Form Button actions
    
    const handleAddOrEdit = (newData) => {
        if (editingIndex === null) {
            setExpData([...expData, newData]);
        } else {
            const updatedData = [...expData];
            updatedData[editingIndex] = newData;
            setExpData(updatedData);
        }
        setEditingIndex(null);
        setIsFormVisible(false);
    }

    const handleCancel = () => {
        setEditingIndex(null);
        setIsFormVisible(false);
    }

    // Display Uni item actions

    const handleEdit = (index) => {
        setEditingIndex(index);
        setIsFormVisible(true);
    }

    const handleRemove = (index) => {
        setExpData(expData.filter((_, i) => i !== index));
    }

    const handleAdd = () => {
        setEditingIndex(null);
        setIsFormVisible(true);
    }


    return (
        <div className="exp">
            <h1>Experience</h1>
            {isFormVisible && (
                <ExperienceForm
                    initialData={editingIndex === null ? {} : expData[editingIndex]}
                    onSubmit={handleAddOrEdit}
                    onCancel={handleCancel}
                />
            )}
            {!isFormVisible && 
                (<ExperienceList 
                    expData={expData} 
                    onEdit={handleEdit} 
                    onRemove={handleRemove}
                     onAdd={handleAdd} 
                />)
            }
        </div>
    );
}

Experience.propTypes = {
    expData: PropTypes.arrayOf(PropTypes.shape({
        school: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        gpa: PropTypes.string,
        startDate: PropTypes.string,
        gradDate: PropTypes.string,
    })).isRequired,
    setExpData: PropTypes.func.isRequired,
}

export default Experience;
