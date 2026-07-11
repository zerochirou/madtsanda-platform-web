import { Footer } from "@/components/shared/footer";
import { Navigation } from "@/components/shared/navigation";
import { UnderDevelopmentBanner } from "@/components/shared/under-development-banner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--site-banner-offset:44px] sm:[--site-banner-offset:48px]">
      {/*<SmoothCursor cursor={<GraduationCap />} />*/}
      <UnderDevelopmentBanner />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
