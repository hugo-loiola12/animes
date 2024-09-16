import { Metadata } from "next";
import Favicon from "../app/data/icon/icon.png";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.css";

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
      <body className="dark bg-current">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
