import React, { useEffect } from 'react';
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

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(arguments) }
    gtag('js', new Date());
  });

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
