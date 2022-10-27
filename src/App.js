import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './cmps/Footer';
import './style/style.scss';
import Favorites from './pages/Favorites';
import { useState } from 'react';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home favorites={favorites} setFavorites={setFavorites} />} />
              <Route path="/favorites" element={<Favorites/>} />
            <Route path="/details/:name" element={<Details/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
