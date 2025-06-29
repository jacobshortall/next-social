import { NavigationMenu } from 'radix-ui';
import CustomLink from './CustomLink';
import SignOutButton from './SignOutButton';

const Nav = () => {
    return (
        <NavigationMenu.Root className="nav">
            <NavigationMenu.List className="nav_main-menu menu">
                <NavigationMenu.Item>
                    <CustomLink href="/">Spank</CustomLink>
                </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.List className="nav_auth-menu menu">
                <NavigationMenu.Item>
                    <CustomLink href="/sign-in">Log In</CustomLink>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <CustomLink href="/sign-up">Sign Up</CustomLink>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <SignOutButton />
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default Nav;
