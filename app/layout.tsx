import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PageTransitionLoader from '@/components/PageTransitionLoader';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ROBOTWALA | India's Leading AI, Automation & Robotics Company",
  description:
    "ROBOTWALA is India's leading AI, Automation, and Robotics company delivering affordable, premium, and AI-powered technology solutions for education and industry.",
  keywords: [
    "Robotwala",
    "AI Robotics",
    "LUCY Robot",
    "EdTech Kits",
    "School Robotics Lab",
    "College Centre of Excellence",
    "Indore Robotics",
    "Drone Technology",
  ],
  icons: {
    icon: [
      { url: '/robotwala-logo.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/robotwala-logo.png',
    apple: '/robotwala-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/robotwala-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/robotwala-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/robotwala-logo.png" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-[#030303] text-[#A1A1AA] antialiased selection:bg-cyan-400 selection:text-black overflow-x-hidden min-h-screen flex flex-col justify-between`}
      >
        <IntroAnimation>
          {/* Top Page Transition Loader & Laser Progress Bar */}
          <Suspense fallback={null}>
            <PageTransitionLoader />
          </Suspense>

          {/* Futuristic Custom Animated Cursor */}
          <CustomCursor />

          {/* Clean Subtle Dot Matrix Pattern Overlay */}
          <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] opacity-70" />

          {/* Central Subtle Cyan Ambient Glow */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-cyan-500/[0.04] blur-[160px] rounded-full pointer-events-none z-0" />

          {/* Global Shared Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="relative z-10 flex-1 flex flex-col w-full pt-16 sm:pt-20">
            {children}
          </main>

          {/* Global Shared Footer */}
          <Footer />
        </IntroAnimation>
      </body>
    </html>
  );
}
