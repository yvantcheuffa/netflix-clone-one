import React, {useContext, useState} from "react";
import {Header} from "../components";
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from "../context/firebase";

export function HeaderContainer({ nextPageName, nextRoute, children, ...restProps }) {

    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    return (
        <Header background={true} {...restProps}>
            <Header.Frame>
                <Header.Logo src="/images/logo/logo.svg" alt="Netflix Clone" to={ROUTES.HOME} />
                <Header.ButtonLink to={ user?.email ? ROUTES.BROWSE : nextRoute }>
                    { user?.email ? 'Browse' : nextPageName }
                </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}