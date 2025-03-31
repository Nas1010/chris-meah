

// import React from 'react';
// import styles from '../styles/Contact.module.css';

// const Contact = () => {
//   return (
//     <section id="contact" className={styles.section}>
//       <div className={styles.contactContainer}>
//         <h1>Get In Touch</h1>
//         <p>Feel free to reach out to me through the following channels:</p>

//         <div className={styles.contactOptions}>
//           {/* LinkedIn contact */}
//           <a
//             href="https://www.linkedin.com/in/chrismeah"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.contactButton}
//           >
//             <img src="/linkedin-icon.png" alt="LinkedIn" className={styles.icon} />
//             <span>Connect on LinkedIn</span>
//           </a>

//           {/* Email contact */}
//           <a href="mailto:chris@schoolofcode.co.uk" className={styles.contactButton}>
//             <img src="/mail-icon.png" alt="Mail" className={styles.icon} />
//             <span>Send an Email</span>
//           </a>
//         </div>

//         <div className={styles.additionalInfo}>
//           <h2>Speaking Engagements</h2>
//           <p>
//             I'm available for speaking engagements on topics related to tech education, coding bootcamps, and career
//             transitions into the tech industry. Please reach out via email to discuss opportunities.
//           </p>

//           <h2>School of Code Inquiries</h2>
//           <p>
//             For information about School of Code bootcamps, partnerships, or hiring our graduates, please visit the{' '}
//             <a href="https://www.schoolofcode.co.uk" target="_blank" rel="noopener noreferrer">
//               School of Code website
//             </a>{' '}
//             or contact our team directly.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import styles from '../styles/Contact.module.css';
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react"

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subheading}>Contact Information</h3>
            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <a href="chrismeah@gmail.com" className={styles.link}>
              chrismeah@gmail.com
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/chrismeah/" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin className={styles.socialIcon} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yourusername" className={styles.socialLink} aria-label="GitHub">
                <Github className={styles.socialIcon} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className={styles.services}>
            <h3 className={styles.subheading}>Services</h3>
            <div className={styles.serviceItem}>
              <h4 className={styles.serviceTitle}>Speaking Engagements</h4>
              <p className={styles.serviceDescription}>
                I'm available for speaking engagements on topics related to AI, coding bootcamps, and career
                transitions into the tech industry. Please reach out via email to discuss opportunities.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h4 className={styles.serviceTitle}>School of Code Inquiries</h4>
              <p className={styles.serviceDescription}>
                For information about School of Code bootcamps, partnerships, or hiring our graduates, please visit the
                School of Code website or contact our team directly.
              </p>
              <a href="https://schoolofcode.co.uk" className={styles.externalLink}>
                Visit School of Code
                <ExternalLink className={styles.externalLinkIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Contact;