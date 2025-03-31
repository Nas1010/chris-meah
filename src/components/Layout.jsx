import BackgroundVideo from "./BackgroundVideo";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar /> 
      
      <div className={styles.background}>
        <BackgroundVideo />
      </div>

      <main className={styles.main}>{children}</main> 
    </div>
  );
};

export default Layout;