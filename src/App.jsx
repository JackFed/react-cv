import './styles/App.css'
import Display from './components/Display.jsx'
import { useState } from 'react'
import Personal from "./components/Personal.jsx"
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx' 


function App() {
  const [personalData, setPersonalData] = useState({
      name: "Jon Daniels", 
      email: "jdanny@gmail.com",
      github: "",
      linkedIn: "",
  });

  const [educationData, setEducationData] = useState([])

  const [experienceData, setExperienceData] = useState([])

  const handleEducationSubmit = (data) => {
    setEducationData([...educationData, data]);
  };

  const handleExperienceSubmit = (data) => {
    setExperienceData([...experienceData, data]);
  };

  return (
    <>      
      <Personal personalData={personalData} setPersonalData={setPersonalData} />
      <Education onSubmit={handleEducationSubmit} />
      <Experience onSubmit={handleExperienceSubmit} />      
      <Display personalData={personalData} eduData={educationData} expData={experienceData} />
    </>
  )
}

export default App
