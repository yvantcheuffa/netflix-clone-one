import React, {useState} from "react";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import SignInContainer from "../containers/sign-in-form";

export default function SignIn() {

    return (
        <>
            <HeaderContainer>
                <SignInContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}