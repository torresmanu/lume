import { setRequestLocale } from "next-intl/server";
import { BuildingSection } from "@/components/building-section";
import { DomingoSection } from "@/components/domingo-section";
import { HeroSection } from "@/components/hero-section";
import { ObjectSection } from "@/components/object-section";
import { OldScriptSection } from "@/components/old-script-section";
import { WaitlistSection } from "@/components/waitlist-section";
import { resolveLocale } from "@/i18n/locale";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);

  return (
    <main id="contenido">
      <HeroSection />
      <OldScriptSection />
      <ObjectSection />
      <DomingoSection />
      <BuildingSection />
      <WaitlistSection />
    </main>
  );
}
