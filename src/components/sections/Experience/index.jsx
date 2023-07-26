import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { ExperienceConteiner } from './style';
import CardExperience from '../../elements/cards/CardExperience/';
import { BigParagraphBlack } from '../../styles/BigParagraph.style';
import { DecoTitleWhite } from '../../styles/DecoTitle.style';
import { experiences } from '../../../env/experiences';

function Component() {

    const cardExps = [];
    for(let exp of experiences) {
        cardExps.push(
            <CardExperience key={experiences.indexOf(exp)}                   
                title={exp.title} 
                description={exp.description}
                tagTitle={exp.tagTitle}
                tags={exp.tags}
                year={exp.year}
            />
        );
    }

    return (
        <ExperienceConteiner id="experience">
            <GridContainer>
                <DecoTitleWhite>Experiência</DecoTitleWhite>
                <section>
                    <BigParagraphBlack>
                        Desenvolvo diversos projetos web, desde <strong>landing pages</strong> a sistemas 
                        mais robustos como <strong>controles de estoques</strong>, as principais linguagens 
                        que uso são <strong>HTML</strong>, <strong>CSS</strong> e <strong>javascript</strong> alinhados 
                        com o framework <strong>React.js</strong>.
                    </BigParagraphBlack>
                    { cardExps }
                </section>
            </GridContainer>
        </ExperienceConteiner>
    );
}

export default Component;