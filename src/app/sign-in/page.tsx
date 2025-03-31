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
            <Box className="form-container" maxWidth="500px">
                <Card size="4">
                    <Heading as="h1" className="form-heading">
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

                        <Box className="form-button-container">
                            <Button variant="surface" className="form-button">
                                Create an account
                            </Button>

                            <Button type="submit" className="form-button">
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
