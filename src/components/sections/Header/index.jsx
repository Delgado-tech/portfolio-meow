import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { HeaderContainer } from './style';

function Component() {
    return (
        <HeaderContainer id="header">
            <GridContainer>
                <h1>Meow</h1>
                <ul>
                    <li>Experiência</li>
                    <li>Formação</li>
                    <li>Contato</li>
                </ul>
            </GridContainer>
        </HeaderContainer>
    );
}

export default Component;