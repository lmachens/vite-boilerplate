import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';
import styles from './App.module.css';
import Welcome from './components/Welcome/Welcome';
import logo from './logo.svg';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <Welcome />
          <p>
            <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a className={styles['App-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a
              className={styles['App-link']}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Switch>
            <Route path="/about" element={<main>About</main>} />
            <Route path="/" element={<main>Home</main>} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
