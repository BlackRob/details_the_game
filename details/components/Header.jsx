import React from 'react';
// import Ellipsis from './header_pages/Ellipsis';
import Question from './header_pages/Question';
import Settings from './header_pages/Settings';
import styles from './header_pages/HeaderPage.module.css';

// our header, which has nothing to do with gameplay
export default ({ ...props }) => (
  <header className={styles.App_header}>
    <div className={styles.Header_logo} ><a href="https://grumbly.games" alt="logo">details</a></div>

    <Question />
    <Settings />
  </header>
);
// <Ellipsis />