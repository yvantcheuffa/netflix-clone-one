import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    width: 100%;
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin: auto;
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;

export const Header = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    margin-bottom: 1px;
    font-weight: normal;
    background: #303030;
    padding: .8em 2em;
    user-select: none;
    
    @media(max-width: 600px) {
        font-size: 16px;
    }
`;

export const Item = styled.div`
    max-width: 810px;
    width: 100%;
    color: white;
    margin-bottom: 10px;
    
    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: .8em 2.2em .8em 1.2em;
    white-space: pre-wrap;
    user-select: none;
    
    @media(max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;


export const Title = styled.h1`
    text-align: center;
    line-height: 1.1;
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    
    @media(max-width: 600px) {
        font-size: 35px;
    }
`;

export const ToggleIcon = styled.img`
    filter: brightness(0) invert(1);
    width: 24px;
    font-weight: 0;
    
    @media(max-width: 600px) {
        width: 16px;
    }
`;