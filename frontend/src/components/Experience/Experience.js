import React from "react";
import Button from "../Button/Button";

function Experience({
  experience,
  index,
  handleExperienceChange,
  handleRemoveExperience,
  handleAddExperience,
  previousPage,
}) {
  return (
    <div key={experience.id}>
      <label>
        Experiences {index + 1}:
        <input
          type="text"
          value={experience.title}
          onChange={(event) => handleExperienceChange(index, event, "title")}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={experience.test}
          onChange={(event) => handleExperienceChange(index, event, "test")}
        />
      </label>
      <Button type="button" onClick={handleAddExperience} text={"+"} />
      <Button
        type="button"
        onClick={() => handleRemoveExperience(index)}
        text={"-"}
      />
      <Button text="Previous" onClick={previousPage} />
    </div>
  );
}

export default Experience;
