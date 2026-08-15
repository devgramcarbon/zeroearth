import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZeroEarth | Site Under Maintenance",
  description:
    "ZeroEarth builds climate-ready infrastructure for decarbonisation programs in hard-to-abate sectors. Our website is currently under maintenance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#fbfaf7] text-[#141414]">
        {children}
      </body>
    </html>
  );
}
