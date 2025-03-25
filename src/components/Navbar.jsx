import { Link } from 'react-scroll';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Your Name</h1>
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="schoolOfCode" smooth={true} duration={500}>School of Code</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;