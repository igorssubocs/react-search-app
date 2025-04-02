import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="h-screen grid grid-rows-[40px_1fr_40px] bg-gradient-to-r from-blue-500 via-pink-400 to-purple-300">
      <Header />
      <SearchPanel />
      <Footer />
    </div>
  );
}
