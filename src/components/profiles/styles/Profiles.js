import styled from 'styled-components/macro';
import Avatar from "@material-ui/core/Avatar";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: auto;
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 48px;
    color: white;
    text-align: center;
    font-weight: 500;
`;

export const Name = styled.p`
    color: #808080;
    cursor: pointer;
    font-size: 16px;
    text-overflow: ellipsis;
    
    &:hover {
        color: #e5e5e5;
        font-weight: bold;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
`;

export const Picture = styled(Avatar)`
    cursor: pointer;
    border: 3px solid black;
    width: 100%;
    max-width: 150px;
    height: auto;
`;

export const Item = styled.li`
    max-width: 200px;
    max-height: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;
    
    &:hover ${Picture} {
        border: 3px solid white;
    }
    
    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }
    
    &:last-of-type {
        margin-right: 0;
    }
`;
