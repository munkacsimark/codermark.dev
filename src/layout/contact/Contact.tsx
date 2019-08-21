import React from 'react';
import { viewNames } from '../../view-router';
import styles from './Contact.module.scss';

interface IFormData {
  name: string,
  email: string,
  message: string,
}

const Contact: React.FunctionComponent = () => {

  const nameInput = React.createRef<HTMLInputElement>();
  const emailInput = React.createRef<HTMLInputElement>();
  const messageInput = React.createRef<HTMLTextAreaElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    /*event.preventDefault();
    const data: IFormData = {
      name: nameInput.current ? nameInput.current.value : '',
      email: emailInput.current ? emailInput.current.value : '',
      message: messageInput.current ? messageInput.current.value : '',
    }
    const fetchOptions: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(data)
    };
    fetch('https://formspree.io/munkacsimark@gmail.com', fetchOptions)
      .catch((error: Error) => console.error(error));*/
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
        action="https://formspree.io/munkacsimark@gmail.com"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}>
        <input
          ref={nameInput}
          className={styles.input}
          type="text"
          name="name"
          placeholder="What's your name?"/>
        <input
          ref={emailInput}
          className={styles.input}
          type="email"
          name="email"
          placeholder="What's your email?"/>
        <textarea
          ref={messageInput}
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
