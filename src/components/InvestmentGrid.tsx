
'use client';

import { motion } from 'framer-motion';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["italic"] });

const investmentData = [
  { 
    name: 'Banks', 
    return: '3-6%',
    description: 'Traditional banking returns',
    icon: '🏦'
  },
  { 
    name: 'Fixed Deposits', 
    return: '5-7%',
    description: 'Low risk, fixed returns',
    icon: '📈'
  },
  { 
    name: 'Index Funds/Mutual Funds', 
    return: '8-12%',
    description: 'Market-linked returns',
    icon: '📊'
  },
  { 
    name: 'TradeX.', 
    return: '15-25%',
    description: 'AI-optimized trading',
    icon: '🎯',
    highlight: true
  }
];

export function InvestmentGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${instrumentSerif.className} text-4xl md:text-5xl text-center mb-12 text-gray-800`}>
          Performance Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border-2 ${
                item.highlight 
                  ? 'border-green-500 bg-green-50 shadow-lg' 
                  : 'border-gray-200 bg-white hover:shadow-md transition-shadow'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className={`text-2xl font-bold ${
                    item.highlight ? 'text-green-600' : 'text-gray-800'
                  }`}>
                    {item.name}
                  </h3>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <p className="text-3xl font-bold mt-4 text-gray-900">
                  {item.return}
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  {item.description}
                </p>
                {item.highlight && (
                  <div className="mt-4 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full w-fit">
                    Recommended
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
