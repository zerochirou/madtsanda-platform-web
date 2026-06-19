import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "MTsN 2 Kota Kediri | Madtsanda Platform",
    template: "%s | MTsN 2 Kota Kediri",
  },
  description:
    "Website resmi MTsN 2 Kota Kediri dan Madtsanda Connect untuk layanan madrasah, berita, riset, program, dan informasi publik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        outfit.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Toaster position="top-center" />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
