import styled from 'styled-components';
import { BigParagraphBlack } from '../../styles/BigParagraph.style';

export const ExperienceConteiner = styled.section`
    padding: 10rem 0;

    & section {
        grid-column: 6 / span 7;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        & ${BigParagraphBlack} {
            padding-bottom: 2rem;
        }
    }


`;