import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import News from './pages/News';
import Videos from './pages/Videos';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import EventGuide from './pages/EventGuide';
import MediaGuide from './pages/MediaGuide';
import Archive from './pages/Archive';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/news" element={<News />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/event-guide" element={<EventGuide />} />
              <Route path="/media-guide" element={<MediaGuide />} />
              <Route path="/archive" element={<Archive />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App