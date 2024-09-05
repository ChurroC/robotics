import "./globals.css";

import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
// GeistMono: --font-geist-mono
// font-family: var(--font-geist-mono) as an example

import { ThemeProvider, getServerTheme } from "next-server-theme/server";

import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <Script src="/serverRender.js" strategy="beforeInteractive" />
            </head>
            <body className={`${getServerTheme()} ${GeistSans.className} bg-white dark:bg-black`}>
            <ThemeProvider themes={["system", "dark", "light"]} element="body">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
