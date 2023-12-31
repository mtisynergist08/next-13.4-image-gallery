import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Container, SSRProvider } from "@/components/bootstrap";
import NavBar from "@/app/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 13.4 Image Gallery",
  description:
    "Generated by create next app for Unsplash Image API - Coding in Flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className={"py-4"}>{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
