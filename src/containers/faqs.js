import React from "react";
import { Accordion } from "../components";
import faqs from '../fixtures/faqs.json';

export function FaqsContainer ({ children }) {
    return (
        <Accordion>
            <Accordion.Title>
                Frequently Asked Questions
            </Accordion.Title>
            {
                faqs.map(item => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
            {children}
        </Accordion>
    );
}
