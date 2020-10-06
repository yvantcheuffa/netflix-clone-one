import React from "react";
import {
    Container,
    Frame,
    ButtonLink,
    Logo,
    Background,
} from './styles/Header';
import {Link as ReactRouterLink} from "react-router-dom";

export default function Header({ background=true, children, ...restProps }) {
    return (
        background ? (<Background src='/images/misc/home-bg.jpg' {...restProps}>{children}</Background>)
                    : children
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return (
        <ButtonLink {...restProps}>
            {children}
        </ButtonLink>
    );
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}