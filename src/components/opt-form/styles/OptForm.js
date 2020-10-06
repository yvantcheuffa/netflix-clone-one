import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin-top: 70px;
    flex-wrap: wrap;
    
    @media(max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    flex: 1;
    border: 0;
    padding: 10px;
    height: 70px;
    max-width: 540px;
    box-sizing: border-box;
    outline-width: 0;
    margin-right: 1px;
    
    @media(max-width: 1000px) {
        width: 100%;
        max-width: 390px;
        height: 45px;
        border-radius: 2px;
        margin-top: 20px;
        font-size: 16px;
        padding: 15px 14px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    color: white;
    background: #e50914;
    border: none;
    outline-width: 0;
    cursor: pointer;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    
    &:hover {
        background: #f40612;
    }
    
    @media(max-width: 1000px) {
        height: 35px;
        border-radius: 2px;
        margin-top: 20px;
        font-weight: 20px;
        font-size: 16px;
        padding: 18px 14px;
    }
    
`;

export const Icon = styled.img`
    height: 24px;
    margin-left: 15px;
    filter: brightness(0) invert(1);
    
    @media(max-width: 1000px) {
        width: 16px;
        height: 16px;
    }
`;

export const Text = styled.h3`
    color: white;
    text-align: center;
    margin: 0 auto;
    font-weight: 400;
    margin-bottom: 20px;
`;