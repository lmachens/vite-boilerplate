import React, { useEffect, useState } from 'react';
import classes from './Welcome.module.css';

function Welcome(): JSX.Element {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <p className={classes.message}>{message}</p>;
}

export default Welcome;
