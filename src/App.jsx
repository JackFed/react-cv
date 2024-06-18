import './styles/App.css'
import Display from './components/Display.jsx'
import { useState, useEffect } from 'react'
import Personal from "./components/Personal.jsx"
import Education from './Education.jsx'
import Experience from './components/Experience.jsx' 
import addData from './sampleData.js'

function App() {
  const [personalData, setPersonalData] = useState({});

  const [educationData, setEducationData] = useState([])

  const [experienceData, setExperienceData] = useState([])

  const handleExperienceSubmit = (data) => {
    setExperienceData([...experienceData, data]);
  };

  const clearAllData = () => {
    setPersonalData({});
    setEducationData([]);
    setExperienceData([]);
  };

  const handleAddData = () => {
    addData(setPersonalData, setEducationData, setExperienceData);
  }

  useEffect(() => {
    handleAddData();
  }, []);

  return (
    <>    
      <div className="inputs">
        <button onClick={handleAddData}>Load Sample Data</button>
        <button onClick={clearAllData}>Clear Resume</button>
        <Personal personalData={personalData} setPersonalData={setPersonalData} />
        <Education eduData={educationData} setEduData={setEducationData} />
        <Experience onSubmit={handleExperienceSubmit} />
      </div>
      <Display personalData={personalData} eduData={educationData} expData={experienceData} />
    </>
  )
}

export default App
