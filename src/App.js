import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SellingProducts from './components/SellingProducts';
import BuyingProducts from './components/BuyingProducts';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SellingProducts />} />
          <Route path="/buy" element={<BuyingProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
