import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import ViewProject from './components/ViewProject';
import ClipboardExample from './components/ClipboardExample';
import ImageViewer from './components/ImageViewer';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/view" element={<ViewProject/>} />
        <Route path="/copy" element={<ClipboardExample/>} />
        <Route path="/image" element={<ImageViewer/>} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;