import React, { useState } from 'react';

function PDFForm() {
  const [text, setText] = useState('');
  const [imageData, setImageData] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/pdf', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        imagePath: imageData,
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
      <label>
        Image:
        <input type="file" onChange={handleImageUpload} />
      </label>
       <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label> 
      <button type="submit">Generate PDF</button>
    </form>
  );
}

export default PDFForm;
