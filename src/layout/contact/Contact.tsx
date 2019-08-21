import React from 'react';
import { viewNames } from '../../view-router';
import styles from './Contact.module.scss';

const Contact: React.FunctionComponent = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO handle submit
    // TODO validation
  }

  return (
    <section
      id={viewNames.CONTACT}
      className={styles.section}>
      <h2 className={styles.title}>
        Contact
      </h2>
      <div className={styles.text}>
      Want to get in touch or talk about a project? Feel free to contact me here.
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="What's your name?"/>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="What's your email?"/>
        <textarea
          className={styles.textarea}
          placeholder="How can I help you?"></textarea>
        <button
          className={styles.sendButton}
          type="submit">
          Send message
        </button>
      </form>
      <span className={styles.copyText}>
        Created with &#9829; by me - &copy; {(new Date()).getFullYear()}
      </span>
    </section>
  );
}

export default Contact;
