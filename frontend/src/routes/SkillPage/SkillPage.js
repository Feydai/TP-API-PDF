// SkillsForm.js
import React from 'react';
import Skill from "../../components/Skills/Skill";

function SkillsForm({ skills, handleSkillChange, handleAddSkill, handleRemoveSkill }) {
  return (
    <>
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
    </>
  );
}

export default SkillsForm;