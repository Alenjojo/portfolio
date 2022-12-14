import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes";

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
