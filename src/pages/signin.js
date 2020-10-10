import React, {useState} from "react";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import SignInContainer from "../containers/sign-in-form";
import * as ROUTES from '../constants/routes';

export default function SignIn() {

    return (
        <>
            <HeaderContainer nextPageName='Sign Up' nextRoute={ROUTES.SIGN_UP}>
                <SignInContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}