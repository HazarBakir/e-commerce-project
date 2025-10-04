import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OrdersPage } from './pages/orders/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { Routes, Route } from 'react-router-dom';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  window.axios = axios;
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  const addToCart = async (product, quantity) => {
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity
    });
    await loadCart();
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} addToCart={addToCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} addToCart={addToCart} />} />
      <Route path="/tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  );
}

export default App;
