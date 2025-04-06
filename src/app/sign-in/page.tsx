'use client';

import {
    Box,
    Card,
    Container,
    Heading,
    TextField,
    Button,
    Text,
    Flex
} from '@radix-ui/themes';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from '../../firebase/firebase-auth';

const SignIn = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const email = data.get('email') as string;
        const password = data.get('password') as string;

        signIn(email, password);
    };

    return (
        <Container className="standard-wrapper page-wrapper">
            <Box className="form_container" maxWidth="540px">
                <Card size="4">
                    <Heading as="h1" className="form_heading" size="7">
                        Sign in
                    </Heading>

                    <form onSubmit={handleSubmit}>
                        <Box className="form_input-container">
                            <Flex
                                justify="between"
                                className="form_label-container"
                            >
                                <Text
                                    as="label"
                                    htmlFor="signin-email"
                                    weight="medium"
                                >
                                    Email
                                </Text>

                                {emailError && (
                                    <Text
                                        className="form_input-message"
                                        color="red"
                                    >
                                        Example error message
                                    </Text>
                                )}
                            </Flex>
                            <TextField.Root
                                placeholder="Email"
                                type="email"
                                id="signin-email"
                                name="email"
                            />
                        </Box>

                        <Box className="form_input-container">
                            <Flex
                                justify="between"
                                className="form_label-container"
                            >
                                <Text
                                    as="label"
                                    htmlFor="signin-password"
                                    weight="medium"
                                >
                                    Password
                                </Text>

                                {passwordError && (
                                    <Text
                                        className="form_input-message"
                                        color="red"
                                    >
                                        Example error message
                                    </Text>
                                )}
                            </Flex>
                            <TextField.Root
                                placeholder="Password"
                                type="password"
                                id="signin-password"
                                name="password"
                            />
                        </Box>

                        <Box className="form_button-container">
                            <Button variant="surface" className="form_button">
                                Create an account
                            </Button>

                            <Button type="submit" className="form_button">
                                Sign in
                            </Button>
                        </Box>
                    </form>

                    <Text asChild className="forgot-password">
                        <Link href="/">Forgot password?</Link>
                    </Text>
                </Card>
            </Box>
        </Container>
    );
};

export default SignIn;
