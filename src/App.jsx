import './App.css'
import Display from './resume/Display.jsx'
import { useState } from 'react'
import Personal from "./input/Personal.jsx"
import Education from './input/Education.jsx'


function App() {
  const [personalData, setPersonalData] = useState({
      firstName: "Jon", 
      lastName: "Daniels",
      github: "",
      linkedIn: "",
  });

  const [educationData, setEducationData] = useState({
    school: "Harvard University",
    major: "Bidness",
    gpa: "3.99",
    startDate: "2024-08-15",
    gradDate: "2028-05-15",
  })

  const [submittedEducationData, setSubmittedEducationData] = useState(null);

  const handleEducationSubmit = (data) => {
    setSubmittedEducationData(data);
  };

  return (
    <>      
      <Personal personalData={personalData} setPersonalData={setPersonalData}/>
      <Education eduData={educationData} setEduData={setEducationData} onSubmit={handleEducationSubmit} />
      <Display personalData={personalData} eduData={submittedEducationData}/>
    </>
  )
}

export default App
