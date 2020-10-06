import React from "react";
import {
    Container,
    Form,
    Input,
    Button,
    Icon,
    Text,
} from "./styles/OptForm";

const handleSubmit = (event) => {
    event.preventDefault();
    alert("Handling submit...");
}

export default function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return (
        <Input {...restProps} />
    );
}

OptForm.Form = function OptForm_FORM({ children, ...restProps }) {
    return (
        <Form {...restProps} onSubmit={handleSubmit}>{children}</Form>
    );
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps} type="submit">
            {children}
            <Icon src='/images/icons/chevron-right.png' />
        </Button>
    );
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return (
        <Text {...restProps} >
            {children}
        </Text>
    );
}