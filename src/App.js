import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div className="cloud">
        <Home />
      </div>
    </Router>
  );
}

export default App;
