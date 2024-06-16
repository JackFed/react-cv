import './App.css'
import Display from './resume/Display.jsx'
import { useState } from 'react'
import Personal from "./input/Personal.jsx"


function App() {
  const [data, setData] = useState({
    personal: {
      firstName: "Jon", 
      lastName: "Daniels"
    },
  });

  return (
    <>      
      <Personal data={data} setData={setData}/>
      <Display data={data}/>
    </>
  )
}

export default App
