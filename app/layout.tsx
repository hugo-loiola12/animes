import { Metadata } from "next";
import Favicon from "../app/data/icon/icon.png";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./components/Loading";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Animes do Hugo",
  description: "Página de Animes do Hugo!",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`dark bg-current ${inter.variable} font-sans`}>
        <Suspense fallback={<Loading />}>
          <Header />
          <div>{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
