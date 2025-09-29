import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OrdersPage } from './pages/orders/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { Routes, Route } from 'react-router';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    getAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage cart={cart}/>} />
    </Routes>
  );
}

export default App;
