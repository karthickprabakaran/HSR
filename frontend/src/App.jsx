import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Home from './components/pages/Home.jsx';
import ContactPage from './components/pages/Contact.jsx';
import JuniorPoolVilla from './components/pages/JuniorVilla.jsx';
import Hfsignature from './components/pages/Hfsignature.jsx';
import PresedentialVilla from './components/pages/PresedentialVilla.jsx';
import Facilities from './components/pages/Facilities.jsx';



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/juniorvilla" element={<JuniorPoolVilla />} />
          <Route path="/presedential" element={< PresedentialVilla />} />
          <Route path="/hfsignature" element={<Hfsignature />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
