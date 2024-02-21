import React from "react";
import Button from "../Button/Button";
import "./Experience.css";

function Experience({
  experience,
  index,
  handleExperienceChange,
  handleRemoveExperience,
  handleAddExperience,
  previousPage,
  nextPage,
}) {
  return (
    <div>
      <div className="experience-container">
        <div key={experience.id}>
          <label>
            <input
              placeholder={`Experience ${index + 1}`}
              type="text"
              value={experience.title}
              onChange={(event) => handleExperienceChange(index, event, "title")}
            />
          </label>
          <label>
            <input
              placeholder="Description"
              type="text"
              value={experience.test}
              onChange={(event) =>
                handleExperienceChange(index, event, "test")
              }
            />
          </label>
          <div className="button-add">
                <Button type="button" onClick={handleAddExperience} text={"Ajouter une expérience"} />
                <Button
                  type="button"
                  onClick={() => handleRemoveExperience(index)}
                  text={"Supprimer l'expérience"}
                  color={"red"}
                />
              </div>
            </div>
            <div className="button-pre">
              <Button text="Précédent" onClick={previousPage} />
              <Button text="Suivant" onClick={nextPage} />
        </div>
      </div>
    </div>
  );
}

export default Experience;