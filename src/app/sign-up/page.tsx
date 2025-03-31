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
import { FC, useState } from 'react';

const SignUp: FC = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    return (
        <Container className="standard-wrapper page-wrapper">
            <Box className="form_container" maxWidth="540px">
                <Card size="4">
                    <Heading as="h1" className="form_heading" size="7">
                        Sign up
                    </Heading>

                    <form>
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
