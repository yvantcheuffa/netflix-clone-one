import React, {useState} from "react";
import {Header} from "../components";
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {

    const [user, setUser] = useState();

    return (
        <Header src='/images/misc/home-bg.jpg'>
            <Header.Frame>
                <Header.Logo src="/images/logo/logo.svg" alt="Netflix Clone" to={ROUTES.HOME} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>
                    Sign In
                </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}