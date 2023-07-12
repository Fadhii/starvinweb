import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import '../css/Reservation.css';

function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send reservation details to the server
      await axios.post('http://localhost:4578/reservations', {
        name,
        email,
        phone,
        date,
        time,
        guests,
      }).then(()=>{
        alert("We will contact you soon regarding your reservation");
      });

      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setGuests('');
    } catch (error) {
      console.log(error);
      // Handle error case if the request fails
    }
  };

  return (
    <div className='main-div4'>
      <form action='POST' className='form'>
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
        <button type="submit" onClick={handleSubmit} className='button2'>Confirm Reservation</button>
      </form>
      <div className="image"></div>
    </div>
  );
}

export default Reservation;