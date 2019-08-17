import React from 'react';
import styles from './SocialIcon.module.scss';

interface ISocialIconProps {
  text: string,
  href: string,
  icon: JSX.Element,
}

const SocialIcon: React.FunctionComponent<ISocialIconProps> = (props) => {
  return (
    <a
      href={props.href}
      title={props.text}
      target="_blank"
      rel="noopener noreferrer">
      {props.icon}
      <span className={styles.visuallyHidden}>
        {props.text}
      </span>
    </a>
  );
}

export default SocialIcon;
