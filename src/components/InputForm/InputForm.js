import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ onDateSelect, onCancel, isCountDownActive }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelect(date);
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="input-field"
      />
      {!isCountDownActive && (
        <button type="submit" className="button">
          Start Timer
        </button>
      )}
      {isCountDownActive && (
        <button type="submit" onClick={onCancel} className="button">
          Cancel Timer
        </button>
      )}
    </form>
  );
};

export default InputForm;
