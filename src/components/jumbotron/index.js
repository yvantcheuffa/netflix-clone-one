import React from "react";
import {
    Container, Inner,
    Image, Title, SubTitle,
    Pane, Item
} from "./styles/Jumbotron";

export default function Jumbotron ({ children, direction="row", ...restProps }) {
    return (
        <Item>
            <Inner direction={direction} {...restProps}>
                { children }
            </Inner>
        </Item>
    );
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
    return (
        <Image {...restProps} />
    )
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>{ children }</Title>
    )
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>{ children }</SubTitle>
    )
}

Jumbotron.Container = function JumbotronContainer ({children, ...restProps}) {
    return (
        <Container {...restProps}>{ children }</Container>
    )
}

Jumbotron.Pane = function JumbotronPane ({children, ...restProps}) {
    return (
        <Pane {...restProps}>{ children }</Pane>
    )
}