import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    Navigate('/login');
  };

  return (
    <div>
      <div className={styles.home_container}>
        <nav className={styles.navbar}>
          <a href='/'>
            <img
              className={styles.img}
              src='images/logo.png'
              alt='logo'
              style={{ 'margin-left': '20px' }}
            />
          </a>
          <div>
            <Link to='/contact'>
              <button className={styles.white_btn}>Contact Us</button>
            </Link>
            <button className={styles.white_btn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
