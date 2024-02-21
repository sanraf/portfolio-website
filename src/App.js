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
        <Route path="/portfolio-website" element={<Home />} /> 
      </Routes>
    </div>
  </Router>
  );
}

export default App;