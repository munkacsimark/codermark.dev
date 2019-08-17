import React from 'react';
import { viewNames } from '../../view-router';
import ShowMoreButton from '../../components/show-more-button';
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
      <ShowMoreButton />
    </section>
  );
}

export default Landing;
