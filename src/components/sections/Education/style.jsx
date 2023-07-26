import styled from 'styled-components';
import { DecoTitleBlack } from '../../styles/DecoTitle.style';
import { BigParagraphWhite } from '../../styles/BigParagraph.style';
import darkPawsIcon from '../../../assets/dark-paws.svg';

export const EducationContainer = styled.section`
    background-color: ${({theme}) => theme.colors.fg.c5};
    color: ${({theme}) => theme.colors.bg.c5};
    padding: 10rem 0;

    & ${DecoTitleBlack} {
        width: 450px;
    }

    & section {
        grid-column: 6 / span 7;

        ${BigParagraphWhite} {
            font-size: 1rem;
            line-height: 1.5rem;
            padding-bottom: 5rem;
        }

        & .education_cardHighlights {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 8rem;
        }

        & .education_courseHeader {
            display: flex;
            align-items: center;
            position: relative;

            & figure {
                position: absolute;
                width: 20px;
                height: 20px;
                left: -30px;

                & img {
                    width: 100%;
                }
            }
        }

        & .listCourses {
            margin: 2rem 0 4rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    & .dec {
        width: 120px;
        height: 120px;
        position: absolute;
        background-image: url(${darkPawsIcon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
        left: 0;
        top: 32rem;
    }
`;