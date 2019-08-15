import React from 'react';
import styles from './Site.module.scss';
import Navigation from '../../components/navigation';
import Landing from '../landing';
import About from '../about';
import Online from '../online';
import Contact from '../contact';

const Site: React.FunctionComponent = () => {
  return (
    <main>
      <Landing />
      <Navigation />
      <About />
      <Online />
      <Contact />
    </main>
  );
}

export default Site;
