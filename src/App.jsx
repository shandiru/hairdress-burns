// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage"; // corrected path
import Earwaxremovalpage from "./Page/Earwaxremovalpage"; // corrected path
import ServiceDetailpage from "./Page/ServiceDetailpage"; // corrected path
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Earwaxremovalpage" element={<Earwaxremovalpage />} />
        <Route path="/symptoms" element={<ServiceDetailpage />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
