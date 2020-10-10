import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .75);
    align-items: center;
    min-height: 560px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    margin-bottom: 100px;
    padding: 60px 68px 40px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.p`
    color: #8c8c8c;
    font-size: 13px;
    font-weight: 500;
    line-height: normal; 
`;

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    outline-width: 0;
    color: white;
    height: 50px;line-height: 50px;
    padding 5px 20px;
    margin-bottom: 20px;
    
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

export const Submit = styled.button`
    background: #e87c03;
    border-radius; 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0px 12px;
    padding: 16px;
    border: 0;
    outline-width: 0;
    color: white;
    cursor: pointer;
    
    &:disabled {
        opacity: 0.5;
    }
`;

export const Error = styled.div`
    background-color: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 10px 20px;
`;