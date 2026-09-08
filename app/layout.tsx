import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lukicenturi.com"),
  title: "Luki Centuri, Front End Developer",
  description:
    "Front end developer with 5+ years of experience building Web3 applications with Vue.js and React. Two-time gold medalist in web design and development.",
  openGraph: {
    title: "Luki Centuri, Front End Developer",
    description:
      "Front end developer with 5+ years of experience building Web3 applications with Vue.js and React.",
    url: "https://www.lukicenturi.com",
    siteName: "Luki Centuri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
