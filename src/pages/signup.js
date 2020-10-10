import React, {useState} from "react";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import SignUpContainer from "../containers/sign-up-form";
import * as ROUTES from "../constants/routes";

export default function SignIn() {

    return (
        <>
            <HeaderContainer nextPageName='Sign In' nextRoute={ROUTES.SIGN_IN}>
                <SignUpContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}