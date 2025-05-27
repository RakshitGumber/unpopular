// components/VerificationEmail.js

import React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface VerificationEmailProps {
  url: string;
}

const verification = ({ url }: VerificationEmailProps) => (
  <Html>
    <Tailwind>
      <Body className="bg-gray-100 font-sans p-4">
        <Container className="bg-white rounded-lg max-w-lg mx-auto p-6 shadow-md">
          <Section className="text-center">
            <Heading className="text-2xl font-semibold text-gray-800 mb-4">
              Email Verification
            </Heading>
            <Text className="text-gray-600 mb-6">
              Hi, thank you for signing up! Please verify your email by clicking
              the button below.
            </Text>
            <Button
              href={url}
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Verify Email
            </Button>
            <Text className="text-gray-400 text-xs mt-6">
              If you did not create an account, please ignore this email or
              contact support.
            </Text>
            <Text className="text-gray-400 text-xs mt-2">Thank you!</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default verification;
