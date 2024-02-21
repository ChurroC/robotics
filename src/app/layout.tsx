import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// GeistMono: --font-geist-mono
// font-family: var(--font-geist-mono) as an example

// import { Inter } from "next/font/google";
// const inter = Inter({
//     subsets: ["latin"],
//     variable: "--font-sans"
// });

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${GeistSans.className} ${GeistMono.variable} bg-white dark:bg-black`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
