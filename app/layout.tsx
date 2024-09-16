import { Metadata } from "next";
import Favicon from "../app/data/icon/icon.png";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif" }}>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <Header />
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
        <div style={{ marginTop: "auto" }}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
