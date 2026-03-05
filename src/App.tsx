import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AgenticWorkflows from './pages/AgenticWorkflows';
import VideoMarketing from './pages/VideoMarketing';
import AgenticNodes from './pages/AgenticNodes';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Connect from './pages/Connect';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workflows" element={<AgenticWorkflows />} />
            <Route path="/video" element={<VideoMarketing />} />
            <Route path="/nodes" element={<AgenticNodes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
