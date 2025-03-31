import {
    Box,
    Card,
    Container,
    Heading,
    TextField,
    Button
} from '@radix-ui/themes';

const LogIn = () => {
    return (
        <Container>
            <Box className="form-container" maxWidth="500px">
                <Card size="4">
                    <Heading as="h1" className="form-heading">
                        Log in
                    </Heading>

                    <form>
                        <TextField.Root
                            placeholder="Email"
                            type="email"
                            id="login-email"
                        />
                        <TextField.Root
                            placeholder="Password"
                            type="password"
                            id="login-password"
                        />

                        <Box className="form-button-container">
                            <Button variant="surface" className="form-button">
                                Create an account
                            </Button>

                            <Button type="submit" className="form-button">
                                Log in
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Box>
        </Container>
    );
};

export default LogIn;
