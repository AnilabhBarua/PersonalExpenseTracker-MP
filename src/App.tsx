import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#1a1a1a]">
        <Sidebar />
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto"
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </Router>
  );
}

export default App;