import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lukicenturi.com"),
  title: "Luki Centuri, Fullstack Developer",
  description:
    "Fullstack developer working in Go, TypeScript, Vue.js and React, with a background in Web3 and financial systems. Two-time gold medalist in web design and development.",
  openGraph: {
    title: "Luki Centuri, Fullstack Developer",
    description:
      "Fullstack developer working in Go, TypeScript, Vue.js and React, with a background in Web3 and financial systems.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="grain">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==="light")document.documentElement.classList.add("light")}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
