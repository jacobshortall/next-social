'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavigationMenu } from 'radix-ui';
import { ComponentPropsWithoutRef } from 'react';

type CustomLinkProps = ComponentPropsWithoutRef<typeof Link> & {
    href: string;
};

const CustomLink = ({ href, ...props }: CustomLinkProps) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <NavigationMenu.Link asChild active={isActive}>
            <Link href={href} {...props} />
        </NavigationMenu.Link>
    );
};

export default CustomLink;
