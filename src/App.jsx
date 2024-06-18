import './styles/App.css'
import Display from './components/Display.jsx'
import { useState } from 'react'
import Personal from "./components/Personal.jsx"
import Education from './Education.jsx'
import Experience from './components/Experience.jsx' 


function App() {
  const [personalData, setPersonalData] = useState({
      name: "Jon Daniels", 
      email: "jdanny@gmail.com",
      github: "",
      linkedIn: "",
  });

  // const sampleEdu = {
  //   school: "Harvard University",
  //   major: "B.S. in Fine Arts",
  //   gpa: "3.99",
  //   startDate: "2024-08-15",
  //   gradDate: "2028-05-15",
  // }

  const [educationData, setEducationData] = useState([])

  const [experienceData, setExperienceData] = useState([])

  const handleExperienceSubmit = (data) => {
    setExperienceData([...experienceData, data]);
  };

  return (
    <>      
      <Personal personalData={personalData} setPersonalData={setPersonalData} />
      <Education eduData={educationData} setEduData={setEducationData} />
      <Experience onSubmit={handleExperienceSubmit} />      
      <Display personalData={personalData} eduData={educationData} expData={experienceData} />
    </>
  )
}

export default App
