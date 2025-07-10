import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineer BA-Sulto Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const notoSansJP = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
