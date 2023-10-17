// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(0);
  const [resTime, setResTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(prev => prev + 1)
    }, 1000);
  }, [loading])

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setResTime(loading)
  }, [message])

  return (
    <div className="App">
      <header className="App-header">
        <div>{loading}</div>
        <div>{resTime}</div>
        <p>Response from the server:</p>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
