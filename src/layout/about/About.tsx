import React from 'react';
import SkillBox from '../../components/skill-box';
import { viewNames } from '../../view-router';
import styles from './About.module.scss';
import profileImage1xWebp from '../../assets/images/mark_munkacsi.webp';
import profileImage2xWebp from '../../assets/images/mark_munkacsi_2x.webp';
import profileImage3xWebp from '../../assets/images/mark_munkacsi_3x.webp';
import profileImage4xWebp from '../../assets/images/mark_munkacsi_4x.webp';
import profileImage1x from '../../assets/images/mark_munkacsi.jpg';
import profileImage2x from '../../assets/images/mark_munkacsi_2x.jpg';
import profileImage3x from '../../assets/images/mark_munkacsi_3x.jpg';
import profileImage4x from '../../assets/images/mark_munkacsi_4x.jpg';

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
            text={`Your users hate to wait. They want fast usable sites
              or they will close the tab. With optimization in mind the
              site can work smoothly even on weaker devices and slower
              connection.`} />
          <SkillBox
            icon={(
              <svg
                className={styles.skillIcon}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
              </svg>
            )}
            text={`Nowadays when the IoT is rising and the internet traffic
              from mobile devices exceeds traffic from desktop you can't
              operate without a proper responsive website.`} />
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
            text={`We are developers. We don't write code for computers, the
              compiler does. We're writing code for future self and for other
              fellow developers. Clean code is a must for maintainable apps.`} />
          <SkillBox
            icon={(
              <svg
                className={styles.skillIcon}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            )}
            text={`Web development is a fast evolving field. With latest
              technologies we can create highly optimized modern applications
              in less time which are more scalable.`} />
        </div>
      </div>
      <div className={styles.about}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${profileImage1xWebp},
              ${profileImage2xWebp} 2x,
              ${profileImage3xWebp} 3x,
              ${profileImage4xWebp} 4x`} />
          <img
            className={styles.picture}
            srcSet={`${profileImage1x}
              ${profileImage2x} 2x,
              ${profileImage3x} 3x,
              ${profileImage4x} 4x`}
            alt="Márk Munkácsi" />
        </picture>
        <div className={styles.aboutText}>
          Hi there! My name is <strong className={styles.highlighted}>Mark</strong>. I'm a passionate
          developer, who is always learning and looking for new challenges. I started my career
          as a <strong className={styles.highlighted}>UI designer & sitebuilder</strong> so I have
          good design sense and I can understand and collaborate easily with designers. Currently I'm
          working as a frontend developer with more than 6 years of experience. My strengths are
          plain <strong className={styles.highlighted}>JavaScript(ES6+)</strong> and client side
          apps(SPAs) written in frameworks
          like <strong className={styles.highlighted}>React</strong> or <strong className={styles.highlighted}>Vue</strong>.
          When it's reasonable I like to work with <strong className={styles.highlighted}>TypeScript</strong>.
          I have experience with <strong className={styles.highlighted}>WebExtensions</strong> as well.
        </div>
      </div>
    </section>
  );
}

export default About;
