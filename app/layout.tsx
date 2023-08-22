import Providers from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./Components/NavBar";

import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "This is a tech E-Commerce website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <>
          <NavBar />
        </>
        <div className="pb-20 pt-28">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
