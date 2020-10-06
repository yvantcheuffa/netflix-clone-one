import React from "react";
import {
    Container,
    Base,
    Title,
    Input,
    Link,
    Text,
    TextSmall,
    Submit,
    Error,
} from './styles/Form';


export default function Form({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    );
}

Form.Text = function FormText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    );
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return (
        <TextSmall {...restProps}>
            {children}
        </TextSmall>
    );
}

Form.Base = function FormBase({ children, ...restProps }) {
    return (
        <Base {...restProps}>
            {children}
        </Base>
    );
}

Form.Error = function FormError({ children, ...restProps }) {
    return (
        <Error {...restProps}>
            {children}
        </Error>
    );
}

Form.Input = function FormError({ children, ...restProps }) {
    return (
        <Input {...restProps} />
    );
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return (
        <Submit {...restProps}>
            {children}
        </Submit>
    );
}

Form.Link = function FormLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    );
}