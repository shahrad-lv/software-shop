import React from 'react'
import Skill from './Skill';
import { GridContainer, SkillsContainer, Title } from './Skills.elements';

const Skills = () => {
    return (
      <SkillsContainer>
      <Title variant='h4' component="h4">Why choose us?</Title>
      <GridContainer>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </GridContainer>
      </SkillsContainer>
    )
}

export default Skills
