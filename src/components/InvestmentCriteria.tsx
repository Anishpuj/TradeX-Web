"use client";

import { motion } from "framer-motion";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["italic"] });

export default function InvestmentCriteria() {
	return (
		<section id="criteria" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<motion.h2
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-xs font-semibold tracking-widest text-foreground/70"
				>
					OUR INVESTMENT CRITERIA
				</motion.h2>
				<motion.h3
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.05 }}
					className={`mt-2 text-6xl font-normal tracking-tight sm:text-6xl ${instrumentSerif.className}`}
				>
					Wish to Join us ?
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.1 }}
					className="mt-3 text-foreground/70"
				>
					We maintain the highest standards because exceptional results demand exceptional commitment.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.15 }}
					className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-medium dark:border-white/15"
				>
					CHECK THE REQUIREMENTS
				</motion.div>
				{/* removed inline emoji summary per request */}
			</div>

			<div className="mt-14 grid auto-rows-[minmax(140px,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-6">
				{/* 🚀 Start investing from just $5,000 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45 }}
					className="col-span-2 row-span-2 rounded-2xl border-2 border-black bg-white p-6 dark:border-white/25 dark:bg-black"
				>
					<div className="flex justify-between items-start">
						<div className="text-sm">🚀 Start investing from just</div>
						<span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">Starter</span>
					</div>
					<div className="mt-1 text-3xl font-semibold">$5,000</div>
					<p className="mt-3 text-sm text-foreground/70">
						We partner exclusively with serious traders/investors committed to substantial, long-term growth.
					</p>
				</motion.div>

				{/* 💰 1% Quarterly Performance Fee */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.05 }}
					className="col-span-2 row-span-1 rounded-2xl border-2 border-black bg-white p-6 dark:border-white/25 dark:bg-black"
				>
					<div className="flex justify-between items-start">
						<div className="text-sm">💰 Transparent Fees</div>
						<span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-500">Fees</span>
					</div>
					<div className="mt-1 text-2xl font-semibold">1% Quarterly</div>
					<p className="mt-2 text-sm text-foreground/70">
						We only succeed when you do—simple performance-based model.
					</p>
				</motion.div>

				{/* 📈 Consistent Market Outperformance */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.1 }}
					className="col-span-2 row-span-1 rounded-2xl border-2 border-black bg-white p-6 dark:border-white/25 dark:bg-black"
				>
					<div className="flex justify-between items-start">
						<div className="text-sm">📈 Consistent Outperformance</div>
						<span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-500">Performance</span>
					</div>
					<div className="mt-1 text-2xl font-semibold">Beat the Market</div>
					<p className="mt-2 text-sm text-foreground/70">
						Targeting results above banks, mutual funds, and major indices like Nifty, Nasdaq, and S&P 500.
					</p>
				</motion.div>

				{/* 🤝 Long-term Partnership Focus */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.15 }}
					className="col-span-4 row-span-1 rounded-2xl border-2 border-black bg-white p-6 dark:border-white/25 dark:bg-black"
				>
					<div className="flex justify-between items-start">
						<div className="text-sm">🤝 Long-term Partnership</div>
						<span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-500">Commitment</span>
					</div>
					<div className="mt-1 text-2xl font-semibold">Grow Together</div>
					<p className="mt-2 text-sm text-foreground/70">
						Quarterly reviews, clear communication, and aligned incentives for shared success.
					</p>
				</motion.div>
			</div>
		</section>
	);
}


