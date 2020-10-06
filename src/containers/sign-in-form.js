import React, {useContext, useState} from "react";
import {Form} from "../components";
import {SIGN_UP, BROWSE} from "../constants/routes";
import {FirebaseContext} from "../context/firebase";
import {useHistory} from 'react-router-dom';

export default function SignInContainer() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInValid = emailAddress === '' || password === '';
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const emptyForm = () => {
        setEmailAddress('');
        setPassword('');
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(BROWSE);
            })
            .catch((error) => {
                setError(error.message);
                emptyForm();
            })
    }

    return (
        <Form>
            <Form.Title>
                Sign In
            </Form.Title>

            {
                error && <Form.Error>{error}</Form.Error>
            }
            <Form.Base  method="POST" onSubmit={handleSignIn}>
                <Form.Input
                    autocomplete="off"
                    type="email"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange = { ({ target }) => setEmailAddress(target.value) }
                />
                <Form.Input
                    autoComplete="off"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange = { ({ target }) => setPassword(target.value) }
                />
                <Form.Submit disabled={isInValid} type="submit">
                    Sign In
                </Form.Submit>
                <Form.Text>
                    New to Netflix ? <Form.Link to={SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
                </Form.TextSmall>
            </Form.Base>
        </Form>
    );
}