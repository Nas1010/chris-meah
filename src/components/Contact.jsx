

import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contactContainer}>
        <h1>Get In Touch</h1>
        <p>Feel free to reach out to me through the following channels:</p>

        <div className={styles.contactOptions}>
          {/* LinkedIn contact */}
          <a
            href="https://www.linkedin.com/in/chrismeah"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <img src="/linkedin-icon.png" alt="LinkedIn" className={styles.icon} />
            <span>Connect on LinkedIn</span>
          </a>

          {/* Email contact */}
          <a href="mailto:chris@schoolofcode.co.uk" className={styles.contactButton}>
            <img src="/mail-icon.png" alt="Mail" className={styles.icon} />
            <span>Send an Email</span>
          </a>
        </div>

        <div className={styles.additionalInfo}>
          <h2>Speaking Engagements</h2>
          <p>
            I'm available for speaking engagements on topics related to tech education, coding bootcamps, and career
            transitions into the tech industry. Please reach out via email to discuss opportunities.
          </p>

          <h2>School of Code Inquiries</h2>
          <p>
            For information about School of Code bootcamps, partnerships, or hiring our graduates, please visit the{' '}
            <a href="https://www.schoolofcode.co.uk" target="_blank" rel="noopener noreferrer">
              School of Code website
            </a>{' '}
            or contact our team directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

