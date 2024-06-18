import { useState } from "react";
import PropTypes from "prop-types";
import EducationList from './components/EducationList';
import EducationForm from './components/EducationForm';

const Education = ({eduData, setEduData}) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Form Button actions
    
    const handleAddOrEdit = (newData) => {
        if (editingIndex === null) {
            setEduData([...eduData, newData]);
        } else {
            const updatedData = [...eduData];
            updatedData[editingIndex] = newData;
            setEduData(updatedData);
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
        setEduData(eduData.filter((_, i) => i !== index));
    }

    const handleAdd = () => {
        setEditingIndex(null);
        setIsFormVisible(true);
    }


    return (
        <div className="edu">
            <h1>Education</h1>
            {isFormVisible && (
                <EducationForm
                    initialData={editingIndex === null ? {} : eduData[editingIndex]}
                    onSubmit={handleAddOrEdit}
                    onCancel={handleCancel}
                />
            )}
            {!isFormVisible && 
                (<EducationList 
                    eduData={eduData} 
                    onEdit={handleEdit} 
                    onRemove={handleRemove}
                     onAdd={handleAdd} 
                />)
            }
        </div>
    );
}

Education.propTypes = {
    eduData: PropTypes.arrayOf(PropTypes.shape({
        school: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        gpa: PropTypes.string,
        startDate: PropTypes.string,
        gradDate: PropTypes.string,
    })).isRequired,
    setEduData: PropTypes.func.isRequired,
}

export default Education;
