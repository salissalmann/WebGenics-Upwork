import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from "./Pages/Homepage/Homepage";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import WebDevelopment from "./Pages/WebDevelopment";
import MobileDevelopment from "./Pages/MobileDevelopment";

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
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
        <Routes>
          <Route path="/mobile-development" element={<MobileDevelopment />} />
        </Routes>



      </BrowserRouter>
    </div>
  );
}

export default App;
