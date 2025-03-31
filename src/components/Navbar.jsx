import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Chris Meah</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#schoolOfCode">School Of Code</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
        <div className={styles.navDecoration}>
          {[...Array(20)].map((_, index) => (
            <div key={index} className={styles.glowDot}></div>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar

