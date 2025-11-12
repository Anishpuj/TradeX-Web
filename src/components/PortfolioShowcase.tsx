"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Instrument_Serif } from "next/font/google";

// Image paths in the public directory
const imagePaths = [
  '/background.png',
  '/Black Desktop Wallpaper.png',
  '/Black Main  text  Desktop Logo.png',
  '/Desktop Wallpaper -  Logo and Name with BG .png',
  '/Linkedin Banners2.png',
  '/Linkedin Banners3.png',
  '/Mockups Preview.png',
  '/TradeX Bento.png',
  '/hero bg.png'  // Using hero bg as a fallback for ipad-mockup
];

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

// Use the image paths from the public directory
const baseImages = [...imagePaths];

// Create a function to repeat the images
const repeatImages = (images: (string | undefined)[], count: number) => {
  const result: (string | undefined)[] = [];
  for (let i = 0; i < count; i++) {
    result.push(...images);
  }
  return result;
};

// Create array with many repetitions (10 times)
const potentialImages = repeatImages(baseImages, 10);

// Filter out any undefined values
const portfolioImages = potentialImages.filter(src => src !== undefined) as string[];

export function PortfolioShowcase() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 w-full overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className={`${instrumentSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-gray-900 dark:text-white`}>
            TradeX Portfolio
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our premium trading platform and investment strategies
          </p>
        </div>
        
        <div className="relative w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
          <div className="absolute inset-0 w-full h-full overflow-visible">
            <div className="w-full h-full scale-75 sm:scale-90 md:scale-100 origin-center">
              <ThreeDMarquee 
                images={portfolioImages}
                className="w-full h-full rounded-xl md:rounded-2xl bg-white/70 dark:bg-gray-800/70 p-2 sm:p-4 md:p-6 lg:p-8 backdrop-blur-sm shadow-lg"
              />
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
            <div className="text-center max-w-xs sm:max-w-sm md:max-w-md bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
                TradeX Excellence
              </h3>
              <p className="text-sm sm:text-base text-gray-100 dark:text-gray-200 leading-relaxed">
                Our premium trading platform delivers consistent results through advanced algorithms and strategic market analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
