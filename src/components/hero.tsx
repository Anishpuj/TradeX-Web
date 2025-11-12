import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Marquee, MarqueeText } from '@/components/ui/marquee';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
});

export function Hero() {
  return (
    <section 
      className="relative min-h-[120vh] flex items-start pt-32 pb-32 justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero bg.png')",
      }}
    >
      <div className="container mx-auto px-4 z-10 text-center text-black">
        <Button 
          variant="outline" 
          className="mb-8 bg-white/90 hover:bg-white text-black border-green-500 hover:border-green-500 transition-all rounded-full"
        >
          Powered by <span className="font-semibold ml-1">Tickmill</span>
        </Button>
        <h1 className="text-4xl md:text-6xl font-medium mb-4 leading-tight">
          Our Algorithm Doesn&apos;t Take Breaks,
          <br />
          <span className={`${instrumentSerif.className}`}>Our Clients Do.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Automated trading solutions that work 24/7 so you don&apos;t have to.
        </p>
        <div className="flex flex-col items-center gap-8">
          <Button size="lg" className="gap-2 bg-black hover:bg-black/90 text-lg px-8 py-4 rounded-full">
            Get Started for Free
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <div className="w-full max-w-4xl">
            <Marquee>
              <MarqueeText>Asset allocation</MarqueeText>
              <MarqueeText>•</MarqueeText>
              <MarqueeText>Benchmark</MarqueeText>
              <MarqueeText>•</MarqueeText>
              <MarqueeText>Strategy</MarqueeText>
              <MarqueeText>•</MarqueeText>
              <MarqueeText>Backtesting</MarqueeText>
              <MarqueeText>•</MarqueeText>
              <MarqueeText>Sustainable returns</MarqueeText>
              <MarqueeText>•</MarqueeText>
              <MarqueeText>Low fees</MarqueeText>
            </Marquee>
          </div>
        </div>
      </div>
      {/* Fade effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
