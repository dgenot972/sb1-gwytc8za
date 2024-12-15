import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ShippingPage } from './pages/ShippingPage';
import { RidesharePage } from './pages/RidesharePage';
import { FreterPage } from './pages/FreterPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expedier" element={<ShippingPage />} />
          <Route path="/covoiturage" element={<RidesharePage />} />
          <Route path="/devenir-freter" element={<FreterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}