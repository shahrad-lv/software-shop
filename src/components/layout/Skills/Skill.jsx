import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { SkillTitle, SkillContainer, SkillMedia, SkillContent } from './Skills.elements';

const Skill = () => {
    return (

            <Grid item xs={12} sm={6} md={4}>
            <SkillContainer elevation={0}>
                <SkillMedia
                image='https://img.icons8.com/nolan/128/external-link.png'
                title=""
                />
                <SkillContent>
                <SkillTitle variant="h6" component="h5">
                    خلاقیت
                </SkillTitle>
                <Typography variant="body2" color="textSecondary" component="p">
                    خلاقیت اصلی ترین روش برای ساده سازی روش های پیچیده و کاهش هزینه های مربوطه به قناوری اطلاعات در سازمان هاست.ما با روشی خلاق هزینه های شما را کاهش و بهره وری شما را افزایش میدهیم.
                </Typography>
                </SkillContent>
            </SkillContainer>
            </Grid>

    )
}

export default Skill
