'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.description}>Let's discuss your next project and bring your vision to life.</p>
          <div className={styles.details}>
            <p>hello@carothers.com</p>
            <p>304 N front st</p>
            <p>Wilmington, NC 28401</p>
          </div>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell us about your project"></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
