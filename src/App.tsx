import React from 'react';
import styles from "./App.module.scss";
import PaginatedListContainer from './components/PaginatedList.container';

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.AppHeader}>Bench Test</div>
      <div className={styles.AppBody}><PaginatedListContainer /></div>
    </div>
  );
}

export default App;