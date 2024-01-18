import React from "react";
import { Html, Body, Container, Text, Link, Preview } from "@react-email/components";

interface Props {
    name: string
}

const WelcomeTemplate = ( { name }: Props) => {
    return (
        <Html>
            <Preview> Welcome aboard </Preview>
            <Body>
                <Container>
                    <Text> Hello World </Text>
                    <Link href="https://pitadonaos.com"> Subscribe to us </Link>
                </Container>
            </Body>
        </Html>
    )
}

export default WelcomeTemplate;