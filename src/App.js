// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigator from './components/BottomNavigator';
import PhoneBook from './pages/PhoneBook';
import Announcements from './pages/Announcements';
import Protocols from './pages/Protocols';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/phonebook" element={<PhoneBook />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/protocols" element={<Protocols />} />
          <Route path="/" element={<PhoneBook />} /> {/* Default route */}
        </Routes>
        <BottomNavigator />
      </div>
    </Router>
  );
};

export default App;
