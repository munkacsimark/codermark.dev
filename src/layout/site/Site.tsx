import React, { useEffect } from 'react';
import Navigation from '../../components/navigation';
import Landing from '../landing';
import About from '../about';
import Online from '../online';
import Contact from '../contact';
import ReactGA from 'react-ga';
import styles from './Site.module.scss';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Site: React.FunctionComponent = () => {

  useEffect(() => {
    ReactGA.initialize('UA-146145292-1');
    ReactGA.pageview(window.location.pathname + window.location.hash);
  }, []);

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
