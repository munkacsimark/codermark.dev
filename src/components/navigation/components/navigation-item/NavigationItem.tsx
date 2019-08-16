import React from 'react';
import { viewNames } from '../../../../view-router';
import styles from './NavigationItem.module.scss';

interface INavigationItemProps {
  url: string,
  name: viewNames,
  clickHandler: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name: viewNames) => void,
}

const NavigationItem: React.FunctionComponent<INavigationItemProps> = props => {
  return (
    <li className={styles.menuItem}>
      <a
        className={styles.link}
        href={props.url}
        onClick={(event) => props.clickHandler(event, props.name)}>
        { props.name }
      </a>
    </li>
  );
}

export default NavigationItem;
