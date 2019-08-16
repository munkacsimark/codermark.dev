import React from 'react';
import viewNames from './view-names';

const scrollToView = (event: React.MouseEvent ,view: viewNames): void => {
  event.preventDefault();
  const selectedView = document.getElementById(view);
  if (selectedView !== null)
    selectedView.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
}

export {
  scrollToView,
}
