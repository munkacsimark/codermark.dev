import React from 'react';
import { viewNames } from '../../view-router';
import SocialIcon from '../../components/social-icon';
import styles from './Online.module.scss';

const Online: React.FunctionComponent = () => {
  return (
    <section
      id={viewNames.ONLINE}
      className={styles.section}>
      <h2 className={styles.title}>
        Cyberself
      </h2>
      <div className={styles.text}>
        Yup, cyberself is a fully existing word. I have GitHub
        and GitLab account of course, sometimes I write articles on
        Medium or dev.to. You can follow me on Twitter, I'm spreading
        mostly professional stuff there. You can connect with me on
        LinkedIn and find me on Upwork. I have a shiny Instagram account
        as well with fancy pictures on it. Get in touch with me in the
        cyber space.
      </div>
      <div className={styles.icons}>
        <SocialIcon
          text="GitHub"
          href="https://github.com/munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="GitLab"
          href="https://gitlab.com/munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
              <path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"/>
              <rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="CodeSandbox"
          href="https://codesandbox.io/u/munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 296">
              <path d="M115.498 261.088v-106.61L23.814 101.73v60.773l41.996 24.347v45.7l49.688 28.54zm23.814.627l50.605-29.151V185.78l42.269-24.495v-60.011l-92.874 53.621v106.82zm80.66-180.887l-48.817-28.289-42.863 24.872-43.188-24.897-49.252 28.667 91.914 52.882 92.206-53.235zM0 222.212V74.495L127.987 0 256 74.182v147.797l-128.016 73.744L0 222.212z"/>
              <rect x="0" y="0" width="256" height="296" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="LinkedIn"
          href="https://www.linkedin.com/in/munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"/>
              <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="Upwork"
          href="https://www.upwork.com/freelancers/~019c8a1929f0ef881a"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
              <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="Twitter"
          href="https://twitter.com/munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
              <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"/>
              <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="Dev.to"
          href="https://dev.to/munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M7.362 9.87a.867.867 0 0 0-.52-.194h-.778v4.664h.779a.867.867 0 0 0 .52-.194c.173-.13.26-.324.26-.584v-3.109c0-.259-.088-.453-.26-.583zM20.04 2H3.96A1.96 1.96 0 0 0 2 3.955v16.09A1.96 1.96 0 0 0 3.96 22h16.08A1.96 1.96 0 0 0 22 20.045V3.955A1.96 1.96 0 0 0 20.04 2zM8.884 13.571c0 .84-.518 2.112-2.159 2.11H4.654V8.293h2.115c1.582 0 2.114 1.27 2.114 2.11v3.167zm4.495-3.958H11v1.715h1.454v1.32H11v1.715h2.379v1.32h-2.776a.902.902 0 0 1-.925-.879V9.219a.903.903 0 0 1 .88-.924h2.821v1.318zm4.626 5.147c-.589 1.373-1.645 1.1-2.117 0l-1.72-6.464h1.453l1.327 5.076 1.32-5.076h1.454l-1.717 6.464z"/>
              <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="Medium"
          href="https://medium.com/@munkacsimark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
              <path d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z"/>
              <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
        <SocialIcon
          text="Instagram"
          href="https://www.instagram.com/_codermark"
          icon={(
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
              <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"/>
              <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
            </svg>
          )}/>
      </div>
    </section>
  );
}

export default Online;
