import React from 'react';
import { FooterContainer } from './style';
import { GridContainer } from '../../styles/GridContainer.style';

function Component() {
    return (
        <FooterContainer id="contact">
            <GridContainer className="footer_content">
                <p><b>Estou disponível</b> para novos projetos! Entre em contato comigo para tornarmos as suas ideias em realidade 😻</p>
                <div>
                    <ul className="highlightText">
                        <li>meowstic@gmail.com</li>
                        <li>+55 15 99123-4567</li>
                    </ul>
                </div>
            </GridContainer>
            <GridContainer className="footer_copyright">
                <p>Meow. Alguns direitos reservados.</p>
            </GridContainer>
            <div className="footer_dec">
                <span />
                <span />
            </div>
        </FooterContainer>
    );
}

export default Component;