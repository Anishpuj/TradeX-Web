'use client';

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Instrument_Serif } from "next/font/google";

// Import client images from public directory
const client1Image = "/Client1.jpeg";
const client2Image = "/Client2.jpeg";
const client3Image = "/Client3.jpeg";
const client4Image = "/Client4.jpeg";

const instrumentSerif = Instrument_Serif({
  weight: '400', // Regular weight for Instrument Serif
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
});

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "TradeX has revolutionized my investment portfolio. Even with my demanding flight schedule, their automated system manages my assets efficiently, delivering consistent returns that have outperformed traditional investment options.",
      name: "Arjun Sharma",
      designation: "Pilot",
      src: client1Image,
    },
    {
      quote:
        "As a consultant who understands data-driven decisions, I'm impressed by TradeX's portfolio analytics. Their quantitative approach has diversified my investments and significantly improved my risk-adjusted returns.",
      name: "Vikram Mehta",
      designation: "Consultant",
      src: client2Image,
    },
    {
      quote:
        "The algorithmic precision of TradeX's portfolio management is exceptional. As someone who works with complex systems daily, I appreciate how their technology optimizes asset allocation while minimizing drawdowns.",
      name: "Rahul Patel",
      designation: "SDE Oracle",
      src: client3Image,
    },
    {
      quote:
        "Outstanding support and robust portfolio features. It's rare to find an investment platform that delivers on all its promises. TradeX's technical infrastructure has significantly enhanced my wealth management strategy.",
      name: "Nikhil Verma",
      designation: "Technical Head PayPal",
      src: client4Image,
    },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${instrumentSerif.className} text-5xl font-normal text-gray-900 sm:text-6xl mb-4 italic`}>
            Portfolio Success Stories
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who have transformed their investment portfolios with TradeX
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
