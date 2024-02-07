import React, { useState } from 'react';

function PDFForm() {
  const [text, setText] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/pdf', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        imagePath,
        email,
        phoneNumber,
      }),
    });

    if (response.ok) {
      alert('PDF generated!');
    } else {
      alert('Error generating PDF');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      {/* <label>
        Image Path:
        <input type="text" value={imagePath} onChange={(e) => setImagePath(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label> */}
      <button type="submit">Generate PDF</button>
    </form>
  );
}

export default PDFForm;