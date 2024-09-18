//Phần Header - Navigation Bar
import { Outlet, Link } from "react-router-dom";
import './styles/Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <img src="/path/to/logo.png" alt="B-Local Logo" />
          </div>

          {/* Các liên kết điều hướng */}
          <ul className="nav-links">
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/location">VỊ TRÍ</Link></li>
            <li><Link to="/services">DỊCH VỤ</Link></li>
            <li><Link to="/about">VỀ B-LOCAL</Link></li>
          </ul>

          {/* Nút đăng nhập */}
          <button className="login-btn">
            <Link to="/login">ĐĂNG NHẬP</Link>
          </button>
        </nav>
      </header>

      <Outlet />
    </div>
  );
  };
  
export default Header;