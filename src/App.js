import ReactDOM from 'react-dom/client';
import { Navbar } from './cmps/Navbar/Navbar';
import { UsersApp } from './pages/UsersApp';
import './style/style.scss';
import { useState } from 'react';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <Navbar />
      <UsersApp favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
