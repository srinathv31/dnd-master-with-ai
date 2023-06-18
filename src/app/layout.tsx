import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "DND with AI",
    description: "DND with AI",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="h-screen">
                    <header className="flex items-center justify-center h-1/6 shadow-lg">
                        <h1 className="text-2xl">DND Portal</h1>
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}
