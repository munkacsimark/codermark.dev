import React from 'react';
import ReactGA from 'react-ga';
import styles from './SocialIcon.module.scss';

interface ISocialIconProps {
  text: string,
  href: string,
  icon: JSX.Element,
}

const SocialIcon: React.FunctionComponent<ISocialIconProps> = (props) => {

  const handleClick = (text: string) => ReactGA.event({
    category: 'Social',
    action: 'Navigation',
    label: text,
  });

  return (
    <a
      href={props.href}
      title={props.text}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleClick(props.text)}>
      {props.icon}
      <span className={styles.visuallyHidden}>
        {props.text}
      </span>
    </a>
  );
}

export default SocialIcon;
