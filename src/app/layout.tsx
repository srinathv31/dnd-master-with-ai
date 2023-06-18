import { redirect } from "next/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

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
                    <Header />
                    <div className="flex flex-col justify-center items-center h-5/6">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
