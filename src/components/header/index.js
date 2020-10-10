import React, {useState} from "react";
import {
    Container,
    Feature,
    ButtonLink,
    Logo,
    Background,
    Text,
    FeatureCallOut,
    Link,
    Group,
    Picture,
    Profile,
    DropDown,
    Search,
    SearchInput,
    PlayButton
} from './styles/Header';
import {Link as ReactRouterLink} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function Header({ background, children, ...restProps }) {
    return (
        background ? (<Background {...restProps}>{children}</Background>)
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

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>
            {children}
        </Group>
    );
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return (
        <Feature {...restProps}>
            {children}
        </Feature>
    );
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return (
        <FeatureCallOut {...restProps}>
            {children}
        </FeatureCallOut>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    );
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return (
        <ButtonLink {...restProps}>
            {children}
        </ButtonLink>
    );
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return (
        <PlayButton {...restProps}>
            {children}
        </PlayButton>
    );
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    );
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return (
        <Picture {...restProps} src={`/images/users/${src}.png`}/>
    );
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}

Header.Profile = function HeaderLogo({ children, ...restProps }) {
    return (
        <Profile {...restProps}>
            {children}
        </Profile>
    );
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} />
            <SearchInput active={searchActive} placeholder='Search films and series' type='text' value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        </Search>
    );
}

Header.DropDown = function HeaderDropDown({ children, ...restProps }) {
    return (
        <DropDown {...restProps}>
            {children}
        </DropDown>
    );
}