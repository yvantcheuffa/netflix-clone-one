import React, {useContext, useState} from "react";
import {Form} from "../components";
import {SIGN_IN, BROWSE} from "../constants/routes";
import {FirebaseContext} from "../context/firebase";
import {useHistory} from 'react-router-dom';

export default function SignInContainer() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const isInValid = firstName === '' || emailAddress === '' || password === '';
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const emptyForm = () => {
        setEmailAddress('');
        setFirstName('');
        setPassword('');
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    history.push(BROWSE);
                })
                .catch((error) => {
                    setError(error.message)
                    emptyForm();
                })
            })
            .catch((error) => {
                setError(error.message);
                emptyForm();
            })
    }

    return (
        <Form>
            <Form.Title>
                Sign Up
            </Form.Title>

            {
                error && <Form.Error>{error}</Form.Error>
            }
            <Form.Base  method="POST" onSubmit={handleSignUp}>
                <Form.Input
                    autocomplete="off"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange = { ({ target }) => setFirstName(target.value) }
                />

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
                    Sign Up
                </Form.Submit>
                <Form.Text>
                    Already a Netflix member? <Form.Link to={SIGN_IN}>Sign in.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
                </Form.TextSmall>
            </Form.Base>
        </Form>
    );
}