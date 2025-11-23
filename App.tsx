import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Demos } from './components/Demos';
import { AIChatbot } from './components/AIChatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />
          </Routes>
        </main>
        <AIChatbot />
      </div>
    </Router>
  );
}

export default App;