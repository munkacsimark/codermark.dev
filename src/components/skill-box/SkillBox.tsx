import React from 'react';
import styles from './SkillBox.module.scss';

interface ISkillBoxProps {
  icon: JSX.Element,
  text: string,
}

const SkillBox: React.FunctionComponent<ISkillBoxProps> = (props) => {
  return (
    <div className={styles.skillBox}>
      {props.icon}
      <div className={styles.skillText}>
        {props.text}
      </div>
    </div>
  );
}

export default SkillBox;
