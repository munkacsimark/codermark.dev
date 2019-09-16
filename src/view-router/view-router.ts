import React from 'react';
import ReactGA from 'react-ga';
import viewNames from './view-names';

const handleNavigation = (event: React.MouseEvent, view: viewNames): void => {
  event.preventDefault();
  scrollToView(view);
  window.history.replaceState({}, '', `#${view}`);
  ReactGA.event({
    category: 'Navigation',
    action: 'Navigation',
    label: view,
  });
}

const scrollToView = (view: viewNames): void => {
  const selectedView = document.getElementById(view);
  if (selectedView !== null)
    selectedView.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
}

export {
  handleNavigation,
}
