import './App.css'
import Architecture from './architecture'
import BgReplace from './backgroundremoval'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      {/* Define the routes */}
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/bg-replace" element={<BgReplace />} />
    </Routes>
  </Router>
  );
}

export default App
