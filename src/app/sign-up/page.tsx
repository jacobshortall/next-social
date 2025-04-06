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
import { useState } from 'react';
import { signUp } from '../../firebase/firebase-auth';

const SignUp = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const email = data.get('email') as string;
        const password = data.get('password') as string;

        signUp(email, password);
    };

    return (
        <Container className="standard-wrapper page-wrapper">
            <Box className="form_container" maxWidth="540px">
                <Card size="4">
                    <Heading as="h1" className="form_heading" size="7">
                        Sign up
                    </Heading>

                    <form onSubmit={handleSubmit}>
                        <Box className="form_input-container">
                            <Flex
                                justify="between"
                                className="form_label-container"
                            >
                                <Text
                                    as="label"
                                    htmlFor="signup-email"
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
                                id="signup-email"
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
                                    htmlFor="signup-password"
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
                                id="signup-password"
                                name="password"
                            />
                        </Box>

                        <Box className="form_button-container">
                            <Button variant="surface" className="form_button">
                                Have an account?
                            </Button>

                            <Button type="submit" className="form_button">
                                Sign up
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Box>
        </Container>
    );
};

export default SignUp;
