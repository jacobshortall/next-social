import {
    Box,
    Card,
    Container,
    Heading,
    TextField,
    Button
} from '@radix-ui/themes';

const SignIn = () => {
    return (
        <Container>
            <Box className="form_container" maxWidth="500px">
                <Card size="4">
                    <Heading as="h1" className="form_heading">
                        Sign in
                    </Heading>

                    <form>
                        <TextField.Root
                            placeholder="Email"
                            type="email"
                            id="signin-email"
                        />
                        <TextField.Root
                            placeholder="Password"
                            type="password"
                            id="signin-password"
                        />

                        <Box className="form_button-container">
                            <Button variant="surface" className="form_button">
                                Create an account
                            </Button>

                            <Button type="submit" className="form_button">
                                Sign in
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Box>
        </Container>
    );
};

export default SignIn;
