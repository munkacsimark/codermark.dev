import React from 'react';
import SkillBox from '../../components/skill-box';
import { viewNames } from '../../view-router';
import styles from './About.module.scss';

const About: React.FunctionComponent = () => {
  return (
    <section
      id={viewNames.ABOUT}
      className={styles.section}>
      <h2 className={styles.title}>
        About
      </h2>
      <div className={styles.skills}>
        <div className={styles.skillGroup}>
          <SkillBox
            icon={(
              <svg
                className={styles.skillIcon}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
              </svg>
            )}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam commodo viverra. Curabitur consequat a ante quis faucibus.' />
          <SkillBox
            icon={(
              <svg
                className={styles.skillIcon}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
              </svg>
            )}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam commodo viverra. Curabitur consequat a ante quis faucibus.' />
        </div>
        <div className={styles.skillGroup}>
          <SkillBox
            icon={(
              <svg
                className={styles.skillIcon}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            )}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam commodo viverra. Curabitur consequat a ante quis faucibus.' />
          <SkillBox
            icon={(
              <svg
                className={styles.skillIcon}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            )}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam commodo viverra. Curabitur consequat a ante quis faucibus.' />
        </div>
      </div>
      <div className={styles.about}>
        <picture className={styles.picture}>
          <source
            type="image/webp"
            srcSet="image.webp 2x,
                    image.webp 3x,
                    image.webp 4x" />
          <img
            src="image.jpg"
            srcSet="image.jpg 2x,
                    image.jpg 3x,
                    image.jpg 4x"
            alt="Márk Munkácsi" />
        </picture>
        <div className={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam commodo viverra. Curabitur consequat a ante quis faucibus. Ut scelerisque, sapien porta tincidunt ultricies, risus tellus commodo nulla, quis auctor metus arcu vitae ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra fermentum eros, nec consectetur mauris finibus quis. Morbi porta massa urna, in vestibulum turpis posuere vel. Quisque vel laoreet nisl. Nullam molestie ullamcorper sem sed pretium. Nulla ultrices erat quis sem molestie ullamcorper.
        </div>
      </div>
    </section>
  );
}

export default About;
