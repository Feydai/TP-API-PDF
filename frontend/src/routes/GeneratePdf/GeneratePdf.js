import React, { useState } from "react";
import Skill from "../../components/Skills/Skill";
import Experience from "../../components/Experience/Experience";
import Button from "../../components/Button/Button";
import InformationPersonal from "../../components/InfomationPersonalPage/InformationPersonal";

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
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

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
    setExperiences([
      ...experiences,
      { id: Math.random(), title: "", test: "" },
    ]);
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
      {page === 1 && (
        <InformationPersonal
          firstName={firstName}
          setFirstName={setFirstName}
          text={text}
          setText={setText}
          handleImageUpload={handleImageUpload}
          imageData={imageData}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          nextPage={nextPage}
        />
      )}
      {page === 2 && (
        <>
          {skills.map((skill, index) => (
            <Skill
              key={skill.id}
              skill={skill}
              index={index}
              handleSkillChange={handleSkillChange}
              handleRemoveSkill={handleRemoveSkill}
              handleAddSkill={handleAddSkill}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          ))}
        </>
      )}

      {page === 3 && (
        <>
          {experiences.map((experience, index) => (
            <Experience
              key={experience.id}
              experience={experience}
              index={index}
              handleExperienceChange={handleExperienceChange}
              handleRemoveExperience={handleRemoveExperience}
              handleAddExperience={handleAddExperience}
              previousPage={previousPage}
            />
          ))}
          <Button text="Generate PDF" type="submit" />
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
        </>
      )}
    </form>
  );
}

export default PDFForm;
