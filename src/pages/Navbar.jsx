import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="" />
        </div>
        <ul className="nav-container">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
