import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { ApresentationContainer } from './style';
import profileImage from '../../../assets/profile.png'

function Component() {
    return (
        <ApresentationContainer>
            <GridContainer>
                <figure>
                    <img src={profileImage} alt="minha foto" />
                </figure>
                <article>
                    <h1>Desenvolvedor FullStack & UI Designer</h1>
                    <p>Criando soluções digitais para todo o Brasil 🤖</p>
                </article>
                <span className='dec'></span>
            </GridContainer>
        </ApresentationContainer>
    );
}


export default Component;