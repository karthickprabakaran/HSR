import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Home from './components/pages/Home.jsx';
import ContactPage from './components/pages/Contact.jsx';
import JuniorPoolVilla from './components/pages/JuniorVilla.jsx';
import Hfsignature from './components/pages/Hfsignature.jsx';
import PresedentialVilla from './components/pages/PresedentialVilla.jsx';
import Facilities from './components/pages/Facilities.jsx';
import SpecialOffers from './components/pages/SpecialOffers.jsx';
import AttractionsPage from './components/pages/AttractionsPage.jsx';
import Events from './components/pages/Events.jsx';


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
          <Route path="/events" element={<Events />} />
          <Route path="/offers" element={<SpecialOffers />} />
          <Route path="/attractions" element={<AttractionsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
