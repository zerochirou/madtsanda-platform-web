import { Footer } from "@/components/shared/footer";
import { Navigation } from "@/components/shared/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/*<SmoothCursor cursor={<GraduationCap />} />*/}
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
