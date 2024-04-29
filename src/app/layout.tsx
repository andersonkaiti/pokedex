import { Metadata } from "next";
import Header from "@/components/header/header"
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokedex",
  icons: {
    icon: "/pokebola.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
