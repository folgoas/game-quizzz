import type { Metadata, Viewport } from "next";
import { Fredoka, Titan_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const titanOne = Titan_One({
  variable: "--font-titan",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Fredoka({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Fredoka({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BUZZ! Le Grand Quiz - Jeu Multijoueur",
  description: "Jouez au célèbre jeu de quiz Buzz! avec vos amis. Jusqu'à 32 joueurs avec vos smartphones comme buzzers ! Un party-game fun inspiré de la PS3.",
  keywords: ["Buzz", "Quiz", "Multijoueur", "Party Game", "Buzzer", "Smartphone", "PS3"],
  authors: [{ name: "Buzz! Quiz Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "BUZZ! Le Grand Quiz",
    description: "Jouez au célèbre jeu de quiz Buzz! avec vos amis. Jusqu'à 32 joueurs !",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#00C9FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${fredoka.variable} ${titanOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#00C9FF] text-gray-800 font-[family-name:var(--font-fredoka)]`}
      >
        {children}
        <Toaster />
        <div className="fixed bottom-1 right-2 text-[10px] text-black/30 font-mono z-[9999] pointer-events-none">v0.3.0</div>
      </body>
    </html>
  );
}
