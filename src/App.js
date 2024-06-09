import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';
import ViewProject from './components/ViewProject';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Routes>
        <Route path="/portfolio-website" element={<Home />} /> 
        <Route path="/view-project" element={<ViewProject />} /> 
      </Routes>
    </div>
  </Router>
  );
}

export default App;