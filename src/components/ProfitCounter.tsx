'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export function ProfitCounter() {
  const [profit, setProfit] = useState(100000);

  // Format number and split into parts for animation
  const formatProfit = (value: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    const formatted = formatter.format(value);
    // Split into static part and last 2 digits
    const staticPart = formatted.slice(0, -2);
    const lastTwoDigits = formatted.slice(-2);
    
    return { staticPart, lastTwoDigits };
  };
  
  const { staticPart, lastTwoDigits } = formatProfit(profit);

  // Memoize the interval callback
  const updateProfit = useCallback(() => {
    setProfit(prevProfit => prevProfit + 5);
  }, []);

  useEffect(() => {
    // Set up the interval to increase profit
    const interval = setInterval(updateProfit, 2000);

    // Clean up
    return () => {
      clearInterval(interval);
    };
  }, [updateProfit]);

  return (
    <div className="w-full pt-24 pb-16 bg-linear-to-r from-white to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Total Profits Generated</h2>
        <div className="flex justify-center items-baseline">
          <span className="text-4xl md:text-6xl font-bold font-mono tracking-tight text-gray-800">
            {staticPart}
          </span>
          <motion.span
            key={profit}
            initial={{ opacity: 0, rotateX: 90, y: -20 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -90, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-4xl md:text-6xl font-bold font-mono text-green-600"
          >
            {lastTwoDigits}
          </motion.span>
        </div>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          and counting...
        </p>
      </div>
    </div>
  );
}
