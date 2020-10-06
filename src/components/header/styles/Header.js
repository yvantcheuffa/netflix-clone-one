import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from "react-router-dom";

export const Background = styled.div`
    display: flex;
    height: 79vh;
    flex-direction: column;
    background: url(${({ src }) => src ? src : '/images/misc/home-bg.jpg'}) top left / cover no-repeat;
    border-bottom: 8px solid #222;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.75rem 3.5rem;
    align-items: center;
    
    @media(max-width: 1000px) {
        padding: 1.75rem 2.8rem;
    }
`;

export const Frame = styled.div`
    
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    border-radius: 3px;
    font-size: 15px;
    padding: 8px 17px;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background-color: #f40612;
    }
`;

export const Logo = styled.img`
    width: 108px;
    height: 32px;
    margin-right: 40px;
    
    @media(min-width: 1449px) {
        width: 167px;
        height: 45px;
    }
`;