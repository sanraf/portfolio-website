import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';

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