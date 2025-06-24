import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Nav from '../components/Nav';
import './style.css';
import { AuthContextProvider } from '@/context/AuthContextProvider';

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
                    <AuthContextProvider>
                        <Nav />
                        {children}
                    </AuthContextProvider>
                </Theme>
            </body>
        </html>
    );
}
