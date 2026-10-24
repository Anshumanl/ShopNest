
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import {useSelector} from 'react-redux';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {

  const {user, logout} = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img  src="/logo.png" alt="ShopNest Logo" className="navbar-logo" style={{ width: '36px', height: '36px' }} />
          ShopNest
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        {user ? (
          <>
          <li>
            <Link to="/profile">Hi, {user.name}</Link>
            {user.role === 'admin' && (
              <Link to="/admin">Admin Dashboard</Link>
            )}
          </li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </>
          ) : (
          <li>
            <Link to="/login">Login</Link>
            </li> )}
      </ul>
    </nav>
  );
};

export default Navbar;
