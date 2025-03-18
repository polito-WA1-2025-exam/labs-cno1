import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemePage from './pages/MemePage';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/meme/:id" element={<MemePage />} />
                    {/* 添加更多路由 */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;