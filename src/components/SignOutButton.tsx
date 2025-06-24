'use client';

import { Button } from '@radix-ui/themes';
import { UserAuth } from '@/context/AuthContextProvider';

const SignOutButton = () => {
    const { signOutCurrentUser } = UserAuth();

    return <Button onClick={signOutCurrentUser}>Sign Out</Button>;
};

export default SignOutButton;
