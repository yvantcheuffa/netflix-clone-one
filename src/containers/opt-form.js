import React from "react";
import {OptForm} from "../components";

export default function OptFormContainer({ children }) {
    return (
        <OptForm>
            {children}
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
            <OptForm.Form>
                <OptForm.Input type="email" placeholder="Email address" />
                <OptForm.Button >
                    GET STARTED
                </OptForm.Button>
            </OptForm.Form>
        </OptForm>
    );
}