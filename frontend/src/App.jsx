import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Home from './components/pages/Home.jsx';
import Rooms from './components/pages/Rooms.jsx'
import RoomDetailsPage from './components/pages/RoomDetails.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<RoomDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
