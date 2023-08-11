import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
