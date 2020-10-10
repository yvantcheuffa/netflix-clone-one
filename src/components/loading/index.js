import React from "react";
import {
    Spinner,
    LockBody,
    Picture,
    ReleaseBody,
} from './styles/Loading';

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner>
            <LockBody />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
}