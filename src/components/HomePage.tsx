import { Hero } from "./Hero";
import { VisualShowcase } from "./VisualShowcase";
import { TechStack } from "./TechStack";
import { Services } from "./Services";
import { Work } from "./Work";
import { Clients } from "./Clients";
import { HowWeWork } from "./HowWeWork";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { CTABanner } from "./CTABanner";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <VisualShowcase />
      <TechStack />
      <Services />
      <Work onNavigate={onNavigate} />
      <Clients />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
