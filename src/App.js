import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="">
      <Router>
       <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
