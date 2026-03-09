import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Holmes Center for the Arts | The Center Stage",
  description:
    "Holmes Center for the Arts — providing world-class dance, music, visual arts, and theatre education in the heart of Ohio's Amish Country. 633 students served · 21 live performances · 42 classes per week.",
  keywords: ["dance studio", "arts center", "Millersburg OH", "ballet", "music lessons", "theatre", "Holmes County"],
  openGraph: {
    title: "Holmes Center for the Arts",
    description: "World-class arts education in the heart of Ohio's Amish Country.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
