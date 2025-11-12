"use client";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";

export default function TextFlipSection() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="flex flex-col items-center gap-4 text-center">
				<LayoutTextFlip
					text="TradeX:"
					words={["Lightning Fast", "Smart Bots", "Lower Risk", "Transparent"]}
					duration={2400}
				/>
				<motion.p
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="max-w-xl text-sm text-foreground/70 sm:text-base"
				>
					Automated execution with human oversight—built for consistency and clarity.
				</motion.p>
			</div>
		</section>
	);
}


