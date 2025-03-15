import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full py-3 px-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/hugo-loiola12"
                  title="Hugo Loiola"
                >
                  <span className="text-default-600">Feito por</span>
                  <p className="text-primary">Hugo</p>
                </Link>
                <div className="hidden sm:block text-default-600">•</div>
                <div className="flex items-center gap-1 text-current">
                  <p className="text-default-600">
                    Todos os direitos reservados
                  </p>
                  <span className="text-default-600">
                    {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
