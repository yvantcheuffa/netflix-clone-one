import styled from 'styled-components/macro';

export const Container = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 55px;
    font-weight: bold;
    margin: auto;
    text-align: center;
    
    @media(max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white; 
    font-size: 26px;
    font-weight: normal;
    margin: 15px 0 auto;
    text-align: center;
    
    @media(max-width: 600px) {
        font-size: 18px;
    }
`;