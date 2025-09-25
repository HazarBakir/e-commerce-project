import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OrdersPage } from './pages/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cart-items")
      .then((response) =>
        setCart(response.data)
      );
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
