import React, { useState } from 'react';
import '../css/Reservation.css';

function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here, e.g., send reservation details to server

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setGuests('');
  };

  return (
    <div className='main-div4'>
        
            
            <form onSubmit={handleSubmit} className='form'>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label>Number of Guests:</label>
          <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />
        </div>
        
      </form>
      <button className='button2'>Confirm Reservation</button>
        

        <div class="image"></div>
    </div>
  );
}

export default Reservation;