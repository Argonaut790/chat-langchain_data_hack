import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat LangChain",
  description: "Chatbot for LangChain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div
          className="flex flex-col h-full md:p-8"
          style={{ background: "#F7F4F2" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
