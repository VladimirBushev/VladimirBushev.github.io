import styles from './App.module.css';
import Header from './Header/Header.jsx';
import AppWrapper from './AppWrapper/AppWrapper.jsx';
import React from 'react';

function App(props) {
  return (
    <div className={styles.div}>
      <Header />
      <AppWrapper />
    </div>
  );
}

export default App;
