import React, { useState } from 'react';

const AppointmentForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Form submitted!", { name, date, time });
    onClose(); // Close modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
