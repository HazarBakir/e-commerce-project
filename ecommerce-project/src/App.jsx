import './App.css';
import { OrdersPage } from './pages/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router';
import { TrackingPage } from './pages/TrackingPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
