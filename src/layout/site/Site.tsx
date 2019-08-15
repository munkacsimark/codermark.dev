import React from 'react';
import styles from './Site.module.scss';

const Site: React.FunctionComponent = () => {
  return (
    <div className={styles.site}>
      <header>
        <p>
          MACSKA
        </p>
      </header>
    </div>
  );
}

export default Site;
