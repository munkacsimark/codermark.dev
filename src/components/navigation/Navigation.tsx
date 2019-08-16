import React, { useState, useEffect } from 'react';
import NavigationItem from './components/navigation-item';
import {
  viewNames,
  handleNavigation,
} from '../../view-router';
import styles from './Navigation.module.scss';

const Navigation: React.FunctionComponent = () => {

  const [isOpened, toggleIsOpened] = useState<boolean>(false);
  const [isSticked, setIsSticked] = useState<Boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name: viewNames) => {
    toggleIsOpened(false);
    handleNavigation(event, name);
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      setIsSticked(!entries[0].isIntersecting), { threshold: 0 });
    const target = document.getElementById(viewNames.LANDING);
    if (target) observer.observe(target);
  });

  return (
    <nav className={`${styles.navigation} ${isOpened ? styles.menuIsOpened : ''} ${isSticked ? styles.isSticked : ''}`}>
      <ul className={styles.navigationList}>
        <NavigationItem
          name={viewNames.LANDING}
          url={`/#${viewNames.LANDING}`}
          clickHandler={handleClick} />
        <NavigationItem
          name={viewNames.ABOUT}
          url={`/#${viewNames.ABOUT}`}
          clickHandler={handleClick} />
        <NavigationItem
          name={viewNames.ONLINE}
          url={`/#${viewNames.ONLINE}`}
          clickHandler={handleClick} />
        <NavigationItem
          name={viewNames.CONTACT}
          url={`/#${viewNames.CONTACT}`}
          clickHandler={handleClick} />
      </ul>
      <svg
        className={styles.mobileMenuButton}
        onClick={() => toggleIsOpened(!isOpened)}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    </nav>
  );
}

export default Navigation;
