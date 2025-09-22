import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Home from './components/pages/Home.jsx';
import Rooms from './components/pages/Rooms.jsx'
import RoomDetailsPage from './components/pages/RoomDetails.jsx';
import ContactPage from './components/pages/Contact.jsx';
import JuniorPoolVilla from './components/pages/JuniorVilla.jsx';
import Hfsignature from './components/pages/Hfsignature.jsx';
import PresedentialVilla from './components/pages/PresedentialVilla.jsx';



// NOTE: total only three categories 1.junior resort pool villa 2. resedential family suite villa 3.hf signature villa. 
// junior pool villa - 2 villas 
// presedential family suite villa - 2 villa 
// hf signature villa - 1
// 
// TODO: make edit the room details page to display the additional details  
// TODO: Edit the name in the header or the footer 
// TODO:  





function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/juniorvilla" element={<JuniorPoolVilla />} />
          <Route path="/presedential" element={< PresedentialVilla />} />
          <Route path="/hfsignature" element={<Hfsignature />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
