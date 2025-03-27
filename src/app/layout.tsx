import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Nav from './home/nav';
import './style.css';

export const metadata: Metadata = {
    title: 'Social',
    description: ''
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Theme accentColor="red" grayColor="gray" appearance="dark">
                    <Nav />
                    {children}
                </Theme>
            </body>
        </html>
    );
}
