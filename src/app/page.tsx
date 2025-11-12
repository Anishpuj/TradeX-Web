import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/hero';
import { WhyChooseUs } from '@/components/why-choose-us';
import { PortfolioShowcase } from '../components/PortfolioShowcase';
import Features from '../components/Features';
import InvestmentCriteria from '../components/InvestmentCriteria';
import { ComparisonTable } from '../components/ComparisonTable';
import { InvestmentGrid } from '../components/InvestmentGrid';
import { ProfitCounter } from '../components/ProfitCounter';
import TextFlipSection from '../components/TextFlipSection';
import { IpadMockupSection } from '../components/IpadMockupSection';
import { StatsSection } from '../components/StatsSection';
import { AnimatedTestimonialsDemo } from '../components/AnimatedTestimonialsDemo';
import { ImageGrid as VelocitySection } from '../components/VelocitySection';
import { ImageGrid as VelocitySection2 } from '../components/VelocitySection2';
import { BookCallSection } from '../components/BookCallSection';
import FooterSection from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProfitCounter />
      <WhyChooseUs />
      <PortfolioShowcase />
      <Features />
      <InvestmentCriteria />
      <ComparisonTable />
      <InvestmentGrid />
      <TextFlipSection />
      <IpadMockupSection />
      <StatsSection />
      <VelocitySection2 />
      <AnimatedTestimonialsDemo />
      <VelocitySection />
      <BookCallSection />
      <FooterSection />
    </main>
  );
}
