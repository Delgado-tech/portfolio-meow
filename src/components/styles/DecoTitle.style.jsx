import styled from 'styled-components';

const DecoTitle = styled.h2`
        grid-column: span 4;
        width: 400px;
        font-size: 10rem;
        line-height: 10rem;
        text-transform: uppercase;
        word-wrap: break-word;
`;

export const DecoTitleWhite = styled(DecoTitle)`
    color: ${({theme}) => theme.colors.bg.c2};
`;

export const DecoTitleBlack = styled(DecoTitle)`
        color: ${({theme}) => theme.colors.fg.c6};
    `;