import { NavigationMenu } from 'radix-ui';

const Nav = () => {
    return (
        <NavigationMenu.Root className="nav">
            <NavigationMenu.List className="nav_main-menu menu">
                <NavigationMenu.Item>
                    <NavigationMenu.Link href="/">Spank</NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.List className="nav_auth-menu menu">
                <NavigationMenu.Item>
                    <NavigationMenu.Link href="/">Log In</NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link href="/">Sign Up</NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default Nav;
