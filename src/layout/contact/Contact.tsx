import React, { useState } from 'react';
import { viewNames } from '../../view-router';
import ReactGA from 'react-ga';
import styles from './Contact.module.scss';

const Contact: React.FunctionComponent = () => {

  const [sent, setSent] = useState(false);

  const formElement = React.createRef<HTMLFormElement>();
  const nameInput = React.createRef<HTMLInputElement>();
  const emailInput = React.createRef<HTMLInputElement>();
  const messageInput = React.createRef<HTMLTextAreaElement>();

  const encode = (data: {[key: string]: string}) => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: nameInput.current ? nameInput.current.value : '-',
        email: emailInput.current ? emailInput.current.value : '-',
        message: messageInput.current ? messageInput.current.value : '-',
      }),
    })
    .then(_ => {
      if (nameInput.current) nameInput.current.disabled = true;
      if (emailInput.current) emailInput.current.disabled = true;
      if (messageInput.current) messageInput.current.disabled = true;
      if (formElement.current) formElement.current.reset();
      setSent(true);
      ReactGA.event({
        category: 'Message',
        action: 'Message sent',
      });
    })
    .catch((error: Error) => console.log(error));
    if (formElement.current) formElement.current.reset();
    setSent(true);
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
        ref={formElement}
        name="contact"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input
          ref={nameInput}
          className={styles.input}
          type="text"
          name="name"
          required
          placeholder="What's your name?"
          disabled={sent}/>
        <input
          ref={emailInput}
          className={styles.input}
          type="email"
          name="email"
          required
          placeholder="What's your email?"
          disabled={sent}/>
        <textarea
          ref={messageInput}
          className={styles.textarea}
          name="message"
          placeholder="How can I help you?"
          disabled={sent}></textarea>
        <button
          className={styles.sendButton}
          type="submit"
          disabled={sent}>
          {
            sent
            ? 'Thanks for your message!'
            : 'Send message'
          }
        </button>
      </form>
      <span className={styles.copyText}>
        Created with &#9829; by me - &copy; {(new Date()).getFullYear()}
      </span>
    </section>
  );
}

export default Contact;
