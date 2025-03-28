'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavigationMenu } from 'radix-ui';
import { ComponentProps, FC } from 'react';

interface CustomLinkProps extends ComponentProps<typeof Link> {
    href: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, ...props }) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <NavigationMenu.Link asChild active={isActive}>
            <Link href={href} className="NavigationMenuLink" {...props} />
        </NavigationMenu.Link>
    );
};

export default CustomLink;
