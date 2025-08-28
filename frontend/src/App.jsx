import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Rooms from './components/pages/Rooms.jsx';
import Contact from './components/pages/Contact.jsx';
import Facilities from './components/pages/Facilities.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
