import React, {useState} from "react";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import SignUpContainer from "../containers/sign-up-form";

export default function SignIn() {

    return (
        <>
            <HeaderContainer>
                <SignUpContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}