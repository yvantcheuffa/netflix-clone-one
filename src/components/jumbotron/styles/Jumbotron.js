import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    background-color: red;
    flex-direction: ${({ direction }) => direction};
    margin: auto;
    width: 100%;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div `
    background-color: blue;
`;

export const Image = styled.img `

`;

export const Title = styled.h1 `
    background-color: green;
`;

export const SubTitle = styled.div `
    background-color: grey;
`;

export const Pane = styled.div `

`;