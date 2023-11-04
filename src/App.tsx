import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from "./Pages/Homepage/Homepage";
import Teams from "./Pages/Teams";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/teams" element={<Teams />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
