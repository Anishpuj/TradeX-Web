"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { EvervaultCard } from "./ui/evervault-card";
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: "400", 
  style: ["italic"]
});

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-6xl font-bold text-black mb-4 ${instrumentSerif.className}`}>Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Experience the future of trading with our cutting-edge platform
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button 
            className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Hover on Cards
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-black shadow-lg overflow-hidden">
            <div className="h-64">
              <EvervaultCard text="Quantitative Algorithms" className="h-full flex items-center justify-center" />
            </div>
            <CardHeader className="text-center">
              <CardDescription className="text-gray-600 text-center">
                Our advanced algorithms analyze market trends 24/7 to identify profitable opportunities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-black shadow-lg overflow-hidden">
            <div className="h-64">
              <EvervaultCard text="Capital Risk Management" className="h-full flex items-center justify-center" />
            </div>
            <CardHeader className="text-center">
              <CardDescription className="text-gray-600 text-center">
                Built-in risk management tools to protect your investments and maximize returns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-black shadow-lg overflow-hidden">
            <div className="h-64">
              <EvervaultCard text="Real-time Analytics" className="h-full flex items-center justify-center" />
            </div>
            <CardHeader className="text-center">
              <CardDescription className="text-gray-600 text-center">
                Get instant insights and analytics to make informed trading decisions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
