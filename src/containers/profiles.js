import React from "react";
import * as ROUTES from '../constants/routes';
import {Header} from "../components";
import {Profiles} from "../components";

export default function SelectProfileContainer({ user, setProfile }) {
    return(
        <>
            <Header background={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src='/images/logo/logo.svg' alt='Netflix'/>
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>
                    Who's watching ?
                </Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
}