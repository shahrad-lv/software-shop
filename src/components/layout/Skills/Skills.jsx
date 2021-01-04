import React from 'react'
import Skill from './Skill';
import { GridContainer, SkillsContainer, Title } from './Skills.elements';
import {  useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Skills = () => {

  const skills = useSelector(state => state.firestore.ordered.skills);
  console.log(skills)
    return (
      <SkillsContainer>
      <Title variant='h4' component="h4">Why choose us?</Title>
      <GridContainer>
        {skills && skills.map(skill => (
          <Skill skill={skill} key={skill.id}/>
        ))}
      </GridContainer>
      </SkillsContainer>
    )
}

export default compose(
  firestoreConnect(ownProps => [
    {
      collection: "skills",
      orderBy: ['id']
    }
  ])
)(Skills)
