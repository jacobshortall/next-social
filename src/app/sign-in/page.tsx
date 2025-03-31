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

const SignIn = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    return (
        <Container className="standard-wrapper page-wrapper">
            <Box className="form_container" maxWidth="540px">
                <Card size="4">
                    <Heading as="h1" className="form_heading" size="7">
                        Sign in
                    </Heading>

                    <form>
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
