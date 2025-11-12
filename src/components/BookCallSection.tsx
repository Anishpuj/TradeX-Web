'use client';

import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

export function BookCallSection() {
  return (
    <section className={`relative overflow-hidden bg-linear-to-r from-white to-white py-20 text-white ${instrumentSerif.variable}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-blue-50 to-white bg-center"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`${instrumentSerif.className} text-3xl italic tracking-tight sm:text-4xl text-black`}>
            Ready to Transform Your Trading?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-800">
            Book a free consultation call with our experts to discuss how our AI-powered trading bots can help you achieve your financial goals.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://calendly.com/anishpujari25/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black shadow-lg hover:bg-green-50 transition-colors duration-200 border-2 border-black"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
