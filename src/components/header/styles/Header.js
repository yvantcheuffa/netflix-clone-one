import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from "react-router-dom";
import {Avatar} from "@material-ui/core";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => src ? src : '/images/misc/home-bg.jpg'}) top left / cover no-repeat;
    
    @media(max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .45);
    margin: 0;
`;

export const FeatureCallOut = styled.h2`
    font-weight: bold;
    color: white;
    font-size: 50px;
    line-height: normal;
    margin: 0;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .45);
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === true ? '700' : 'normal')};
    cursor: pointer;
    
    &:hover {
        font-weight: bold;
    }
    
    &:last-of-type: {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Picture = styled.button`
    background: url(${({src}) => src});
    background-size: contain;
    background-repeat: no-repeat;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const DropDown = styled.div`
    border-radius: 5px;
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;    
    
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    
    ${Group} {
        margin-bottom: 10px;
        &:last-of-type: {
            margin-bottom: 0;
        }
        ${Link}, ${Picture} {
            cursor: default;
        }
    }
    button {
        margin-right: 10px;
    }    
    p{
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
    
    button {
        cursor: pointer;
    }
    
    &:hover > ${DropDown} {
        display: flex;
        flex-direction: column;
    }
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

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    padding-left: 30px;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    
    @media(max-width: 1100px) {
        display: none;
    }
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

export const Search = styled.div`
    display: flex;
    align-items: center;
    
    .MuiSvgIcon-root {
        color: white;
        cursor: pointer;
    }
    
    @media(max-width: 700px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    border: 1px solid white;
    outline-width: 0;
    background-color: #44444459;
    color: white;
    transition: width .5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({active}) => (active === true ? '10px' : '0')};
    padding: ${({active}) => (active === true ? '0 10px' : '0')};
    opacity: ${({active}) => (active === true ? '1' : '0')};
    width: ${({active}) => (active === true ? '200px' : '0')};
`;

export const PlayButton = styled.button`
    background-color: #e6e6e6;
    color: #000;
    outline-width: 0;
    box-shadow: 0 .6vw 1vw -.4vw rgba(0, 0, 0, .35);
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 20px;
    transition: background-color ease 1s;
    
    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;