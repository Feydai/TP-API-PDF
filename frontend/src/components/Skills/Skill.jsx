import React from "react";
import Button from "../Button/Button";
import "./Skill.css";

function Skill({
  skill,
  index,
  handleSkillChange,
  handleRemoveSkill,
  handleAddSkill,
  previousPage,
  nextPage,
}) {
  return (
    <div>
      <div className="skill-container">
        <div key={skill.id}>
          <label>
            Skill {index + 1}:
            <input
              type="text"
              value={skill.name}
              onChange={(event) => handleSkillChange(index, event, "name")}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={skill.description}
              onChange={(event) =>
                handleSkillChange(index, event, "description")
              }
            />
          </label>
            <Button type="button" onClick={handleAddSkill} text={"Ajouter une compétence"} />
            <Button
              type="button"
              onClick={() => handleRemoveSkill(index)}
              text={"Supprimer la compétence"}
              color={"red"}
            />
          </div>
          <Button text="Précédent" onClick={previousPage} />
          <Button text="Suivant" onClick={nextPage} />
      </div>
    </div>
  );
}

export default Skill;
