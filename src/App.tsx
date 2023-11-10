import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from "./Pages/Homepage/Homepage";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import WebDevelopment from "./Pages/WebDevelopment";
import MobileDevelopment from "./Pages/MobileDevelopment";
import UIUX from "./Pages/UI-UX";
import Publications from "./Pages/Publications";
import Animations from "./Pages/Animations";
import Consultation from './Pages/Consultation'
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
        <Routes>
          <Route path="/ui-ux" element={<UIUX />} />
        </Routes>
        <Routes>
          <Route path="/publication-services" element={<Publications />} />
        </Routes>
        <Routes>
          <Route path="/animations" element={<Animations />} />
        </Routes>
        <Routes>
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }}
          className="bg-secondary-100 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>


    </div>
  );
}

export default App;
