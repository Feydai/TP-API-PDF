import React, { useState } from "react";

function PDFForm() {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [text, setText] = useState("");
  const [imageData, setImageData] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState([{ name: "", description: "" }]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSkillChange = (index, event, field, value) => {
    const values = [...value];
    values[index][field] = event.target.value;
    setSkills(values);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { id: Math.random(), name: "", description: "" }]);
  };

  const handleRemoveSkill = (index, i) => {
    const values = [...i];
    values.splice(index, 1);
    setSkills(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/pdf", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        text,
        address,
        postalCode,
        city,
        imagePath: imageData,
        email,
        phoneNumber,
        skills,
      }),
    });

    if (response.ok) {
      alert("PDF generated!");
    } else {
      alert("Error generating PDF");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        first name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input type="file" onChange={handleImageUpload} />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        city:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        postal code:
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      {skills.map((skill, index) => (
        <div key={skill.id}>
          <label>
            Skill {index + 1}:
            <input
              type="text"
              value={skill.name}
              onChange={(event) => handleSkillChange(index, event, "name", skills)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={skill.description}
              onChange={(event) =>
                handleSkillChange(index, event, "description", skills)
              }
            />
          </label>
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
          <button type="button" onClick={() => handleRemoveSkill(index, skills)}>
            Remove
          </button>
        </div>
      ))}
      <button type="submit">Generate PDF</button>
    </form>
  );
}

export default PDFForm;
