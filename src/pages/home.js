import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faqs";
import {FooterContainer} from "../containers/footer";
import {HeaderContainer} from "../containers/header";
import OptFormContainer from "../containers/opt-form";
import FeatureContainer from "../containers/feature";


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer>
                    <OptFormContainer />
                </FeatureContainer>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer>
                <OptFormContainer />
            </FaqsContainer>
            <FooterContainer />
        </>
    )
}