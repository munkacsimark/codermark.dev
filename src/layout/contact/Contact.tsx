import React, { useState } from 'react';
import { viewNames } from '../../view-router';
import styles from './Contact.module.scss';

const Contact: React.FunctionComponent = () => {

  const [sent, setSent] = useState(false);

  const formElement = React.createRef<HTMLFormElement>();
  const nameInput = React.createRef<HTMLInputElement>();
  const emailInput = React.createRef<HTMLInputElement>();
  const messageInput = React.createRef<HTMLTextAreaElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formElement.current) return;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `name=${encodeURIComponent(nameInput.current ? nameInput.current.value : '-')}&
        email=${encodeURIComponent(emailInput.current ? emailInput.current.value : '-')}&
        message=${encodeURIComponent(messageInput.current ? messageInput.current.value : '-')}`
    })
    .then(response => response.json())
    .then(_ => {
      if (nameInput.current) nameInput.current.disabled = true;
      if (emailInput.current) emailInput.current.disabled = true;
      if (messageInput.current) messageInput.current.disabled = true;
      if (formElement.current) formElement.current.reset();
      setSent(true);
    })
    .catch((error: Error) => console.log(error));
  }

  return (
    <section
      id={viewNames.CONTACT}
      className={styles.section}>
      <h2 className={styles.title}>
        Contact
      </h2>
      <div className={styles.text}>
        {
          sent
          ? 'Thanks for your message! I\'ll contact you shortly.'
          : 'Want to get in touch or talk about a project? Feel free to contact me here.'
        }
      </div>
      <form
        ref={formElement}
        name="contact"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input name="fuck-bots" />
        <input
          ref={nameInput}
          className={styles.input}
          type="text"
          name="name"
          required
          placeholder="What's your name?"/>
        <input
          ref={emailInput}
          className={styles.input}
          type="email"
          name="email"
          required
          placeholder="What's your email?"/>
        <textarea
          ref={messageInput}
          className={styles.textarea}
          name="message"
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
