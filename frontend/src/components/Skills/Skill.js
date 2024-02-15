import React from 'react';
import Button from '../Button/Button';

function Skill({ skill, index, handleSkillChange, handleRemoveSkill, handleAddSkill }) {
  return (
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
          onChange={(event) => handleSkillChange(index, event, "description")}
        />
      </label>
      <Button type="button" onClick={handleAddSkill} text={'Add Skill'} />
      <Button type="button" onClick={() => handleRemoveSkill(index)} text={'Delete Skill'} color={'red'} />
    </div>
  );
}

export default Skill;