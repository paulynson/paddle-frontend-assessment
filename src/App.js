
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="my-0 mx-auto">
        <Navbar />
      <Routes>
        <Route path="comingsoon" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
     <Footer />
    </div>
  );
}

export default App;
