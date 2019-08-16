import React from 'react';
import {
  viewNames,
  handleNavigation,
} from '../../view-router';
import Particles, { IParticlesParams } from 'react-particles-js';
import particlesConfig from './particles-config.json';
import styles from './Landing.module.scss';

const Landing: React.FunctionComponent = () => {
  return (
    <section
      id={viewNames.LANDING}
      className={styles.section}>
      <Particles
        className={styles.particles}
        width="100vw"
        height="100vh"
        params={particlesConfig as IParticlesParams}/>
      <h1 className={styles.greeting}>
          Hello, I'm <span className={styles.name}>Márk Munkácsi</span>.
          <br />
          I'm a frontend web developer.
      </h1>
      <a
        className={styles.showMore}
        href={`/#${viewNames.ABOUT}`}
        onClick={(event) => handleNavigation(event, viewNames.ABOUT)}>
        Show me more
        <svg
          className={styles.showMoreArrow}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          <path fill="none" d="M0 0h24v24H0V0z"/>
        </svg>
      </a>
    </section>
  );
}

export default Landing;
