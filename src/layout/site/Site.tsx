import React from 'react';
import Navigation from '../../components/navigation';
import Landing from '../landing';
import About from '../about';
import Online from '../online';
import Contact from '../contact';
import styles from './Site.module.scss';

const Site: React.FunctionComponent = () => {
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
