import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Stakehub Assignment",
   description: "Frontend developer assignment",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${space.className} bg-zinc-900 text-zinc-200`}>
            <Header />
            {children}
         </body>
      </html>
   );
}
