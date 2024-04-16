import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [targetDate, setTargetDate] = useState("");
  const [countdown, setCountdown] = useState(null);

  const handleDateChange = (event) => {
    setTargetDate(event.target.value);
  };

  const startCountdown = () => {
    const endDate = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    if (timeRemaining > 0) {
      setCountdown(timeRemaining);
    } else {
      alert("Please select a future date and time.");
    }
  };

  const stopCountdown = () => {
    setCountdown(null);
  };

  useEffect(() => {
    let interval;
    if (countdown !== null) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <input
        type="datetime-local"
        value={targetDate}
        onChange={handleDateChange}
      />
      <button onClick={startCountdown}>Start Countdown</button>
      <button onClick={stopCountdown}>Stop Countdown</button>
      {countdown !== null && <div>{formatTime(countdown)}</div>}
    </div>
  );
}

export default App;
