import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import { Container } from "@mui/material";

export const metadata: Metadata = {
    title: "My Blog",
    description: "Incridible Blog",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AppHeader />
                <Container>{children}</Container>
                <AppFooter />
            </body>
        </html>
    );
}
