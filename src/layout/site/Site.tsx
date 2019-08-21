import React from 'react';
import Navigation from '../../components/navigation';
import Landing from '../landing';
import About from '../about';
import Online from '../online';
import Contact from '../contact';
import styles from './Site.module.scss';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Site: React.FunctionComponent = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push('js', new Date());
  window.dataLayer.push('config', 'UA-146145292-1');

  return (
    <main className={styles.main}>
      <Landing />
      <Navigation />
      <About />
      <Online />
      <Contact />
    </main>
  );
}

export default Site;
