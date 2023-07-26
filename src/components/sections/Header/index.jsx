import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { HeaderContainer } from './style';

function Component() {
    return (
        <>
            <span id="top"></span>
            <HeaderContainer>
                <GridContainer>
                    <h2><a href="#top">Meow</a></h2>
                    <ul>
                        <li><a href="#experience">Experiência</a></li>
                        <li ><a href="#education">Formação</a></li>
                        <li>Contato</li>
                    </ul>
                </GridContainer>
            </HeaderContainer>
        </>
    );
}

export default Component;