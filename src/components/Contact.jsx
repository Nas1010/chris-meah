import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <p>You can reach me via LinkedIn.</p>
      <a href="https://www.linkedin.com/in/chrismeah/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
  );
};

export default Contact;
