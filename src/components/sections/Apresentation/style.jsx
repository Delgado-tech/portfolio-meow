import styled from 'styled-components';
import lightPawsIcon from '../../../assets/light-paws.svg';
import { breakpoints } from '../../../env/breakpoints';

export const ApresentationContainer = styled.section`
    margin-top: 10rem;



    figure {
        grid-column: span 4;
        max-width: 360px;
        min-width: 256px;
        height: 500px;
    
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            
        }
    }

    article {
        grid-column: span 5;
        margin-left: 1.5rem;
        padding-top: 10%;

        h1 {
            color: ${({theme}) => theme.colors.fg.c4};
            padding-left: 3rem;
            position: relative;
            font-size: 4rem;
            line-height: 5rem;


            &::before {
                content: '';
                position: absolute;
                width: 0.635rem;
                height: 100%;
                border-radius: 2px;
                left: 0;
                background: ${({theme}) => theme.colors.gradient.g1.toBottom}
            }
        }

        p {
            position: relative;
            display: flex;
            align-items: start;
            margin-top: 0.5rem;
            padding: 0.25rem 0 0 3rem;
            color: ${({theme}) => theme.colors.fg.c1};
            font-size: 1.5rem;
            line-height: 2.5rem;
            min-width: 600px;

            &::before {
                content: '';
                position: absolute;
                width: 0.635rem;
                height: min(100%, 40px);
                left: 0;
                background: ${({theme}) => theme.colors.gradient.g1.toBottom};
                border-radius: 2px;
            }
        } 
    }

    & .dec {
        width: 120px;
        height: 120px;
        position: absolute;
        background-image: url(${lightPawsIcon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
        right: 12%;
        z-index: -1;
    }

    @media screen and (max-width: ${breakpoints.w1250}) {
        & figure, & article {
            grid-column: span 12;
        }

        & figure {
            min-width: 100%;
            display: flex;
            justify-content: center;
            height: auto;

            & img {
                max-width: 600px;
            }
        }

        & article > p {
            min-width: auto;
        }

        & .dec {
            display: none;
        }
    }

    @media screen and (max-width: ${breakpoints.w500}) {
        article h1 {
            font-size: 3.25rem;
            line-height: 4rem;
        }
    }

    @media screen and (max-width: ${breakpoints.w350}) {
        article h1 {
            font-size: 2.75rem;
            line-height: 3rem;
        }
    }
`;