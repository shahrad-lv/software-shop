import React from 'react';
import Typography from '@material-ui/core/Typography';
import { SkillTitle, SkillContainer, SkillMedia, SkillContent, GridItem } from './Skills.elements';

const Skill = ({skill}) => {

    const {imgSrc , title, description} = skill

    return (

            <GridItem xs={12} sm={6} md={4} className='SkillItmes'>
            <SkillContainer elevation={0}>
                <SkillMedia image={imgSrc} title={title}/>

                <SkillContent>
                    <SkillTitle variant="h6" component="h5">{title}</SkillTitle>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </SkillContent>
            </SkillContainer>
            </GridItem>

    )
}

export default Skill
