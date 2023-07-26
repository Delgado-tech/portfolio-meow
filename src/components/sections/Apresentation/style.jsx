import styled from 'styled-components';
import lightPawsIcon from '../../../assets/light-paws.svg';

export const ApresentationContainer = styled.section`
    margin-top: 10rem;

    figure {
        max-width: 360px;
        min-width: 256px;
        height: 500px;
        grid-column: span 4;
    
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
                width: 10px;
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
                width: 10px;
                height: 40px;
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
        right: 0;
        z-index: -1;
    }
`;