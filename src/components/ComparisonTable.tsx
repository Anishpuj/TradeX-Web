'use client';

import { motion } from 'framer-motion';
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin']
});

const features = [
  { name: 'Return on Investment', tradex: '4% Monthly', bank: '8.96% Yearly' },
  { name: 'Transparent Trading', tradex: '✓', bank: '×' },
  { name: 'Daily Results', tradex: '✓', bank: '×' },
  { name: 'Leverage Control', tradex: '✓', bank: '×' },
  { name: 'AI Driven Trading', tradex: '✓', bank: '×' },
];

export function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 sm:text-5xl mb-4 ${instrumentSerif.className}`}>
            Built to Beat the System
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We don&apos;t just beat banks, we leave them struggling to keep up
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black">
          <div className="grid grid-cols-3 bg-gray-50 border-b-2 border-black">
            <div className="p-6 font-semibold text-gray-600">
              Features
            </div>
            <div className="p-6 text-center font-bold text-green-600 bg-green-50">
              TradeX
            </div>
            <div className="p-6 text-center font-semibold text-gray-500 bg-gray-50">
              Banks
            </div>
          </div>

          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 bg-white border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 border-x border-gray-200"
            >
              <div className="p-5 font-medium text-gray-700 border-r border-gray-200 flex items-center">
                {feature.name}
              </div>
              <div className={`p-5 text-center font-semibold ${
                feature.tradex === '✓' ? 'text-green-600' : 'text-gray-800'
              } border-r border-gray-200 flex items-center justify-center`}>
                {feature.tradex}
              </div>
              <div className={`p-5 text-center ${
                feature.bank === '×' ? 'text-red-500' : 'text-gray-500'
              } flex items-center justify-center`}>
                {feature.bank}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
