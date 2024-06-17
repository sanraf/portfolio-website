import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import ViewProject from './components/ViewProject';
import StackedCards from './components/StackedCards';
import { useState } from 'react';
import Project from './components/Project';
import MobileMockup from './components/MobileMockup';
import DesktopMockup from './components/DesktopMockup';

function App() {
  const [projectName ,setProjectName] = useState('')

  
  function goToProject(name){
    setProjectName(name)
    console.log(name)
  }
  return (
    
    <Router>
    <div className="App">
      <Routes>
        <Route path="/portfolio-website" element={<Home goToProject={goToProject}/>} /> 
        <Route path="/view-project" element={<MobileMockup projectName={projectName}/> } /> 
        <Route path="/view-project-v2" element={<DesktopMockup projectName={projectName}/> } /> 
        
      </Routes>
      
    </div>
  </Router>
  );
}

export default App;