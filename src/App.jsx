import './styles/App.css'
import Display from './components/Display.jsx'
import { useState } from 'react'
import Personal from "./components/Personal.jsx"
import Education from './components/Education.jsx'


function App() {
  const [personalData, setPersonalData] = useState({
      name: "Jon Daniels", 
      email: "jdanny@gmail.com",
      github: "",
      linkedIn: "",
  });

  const [educationData, setEducationData] = useState([])

  const handleEducationSubmit = (data) => {
    setEducationData([...educationData, data]);
  };

  console.log("educationData:", educationData);
  return (
    <>      
      <Personal personalData={personalData} setPersonalData={setPersonalData}/>
      <Education onSubmit={handleEducationSubmit} />
      <Display personalData={personalData} eduData={educationData}/>
    </>
  )
}

export default App
