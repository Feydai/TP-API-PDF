import React, { useState } from "react";
import Skill from "../../components/Skills/Skill";
import Experience from "../../components/Experience/Experience";
import "./generatePdf.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function PDFForm() {
  const PDF_URL = "http://localhost:5000/pdf";
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [text, setText] = useState("");
  const [imageData, setImageData] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState([{ name: "", description: "" }]);
  const [experiences, setExperiences] = useState([{ title: "", test: "" }]);
  const [pdf, setPdf] = useState({});

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSkillChange = (index, event, field) => {
    const values = [...skills];
    values[index][field] = event.target.value;
    setSkills(values);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { id: Math.random(), name: "", description: "" }]);
  };

  const handleRemoveSkill = (index) => {
    const values = [...skills];
    values.splice(index, 1);
    setSkills(values);
  };

  const handleExperienceChange = (index, event, field) => {
    const values = [...experiences];
    values[index][field] = event.target.value;
    setExperiences(values);
  };

  const handleAddExperience = () => {
    setExperiences([ ...experiences,{ id: Math.random(), title: "", test: "" },]);
  };

  const handleRemoveExperience = (index) => {
    const values = [...experiences];
    values.splice(index, 1);
    setExperiences(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(PDF_URL, {
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
        experiences,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setPdf(data);
      console.log(data);
      alert("PDF generated!");
    } else {
      alert("Error generating PDF");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        first name:
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        last name:
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Image:
        <Input type="file" onChange={handleImageUpload} />
      </label>
      <label>
        Email:
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        address:
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        city:
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        postal code:
        <Input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      {skills.map((skill, index) => (
        <Skill
          key={skill.id}
          skill={skill}
          index={index}
          handleSkillChange={handleSkillChange}
          handleRemoveSkill={handleRemoveSkill}
          handleAddSkill={handleAddSkill}
        />
      ))}
      {experiences.map((experience, index) => (
        <Experience
          key={experience.id}
          experience={experience}
          index={index}
          handleExperienceChange={handleExperienceChange}
          handleRemoveExperience={handleRemoveExperience}
          handleAddExperience={handleAddExperience}
        />
      ))}
      {pdf.pdf_name && (
        <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = `http://localhost:5000/pdf/pdf-download/${pdf.pdf_name}`;
            link.download = pdf.pdf_name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          text="Download PDF"
        />
      )}
      <Button text="Generate PDF" type="submit" />
    </form>
  );
}

export default PDFForm;
