"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
	text = "Build Amazing",
	words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
	duration = 3000,
}: {
	text: string;
	words: string[];
	duration?: number;
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		return () => clearInterval(interval);
	}, [duration, words.length]);

	return (
		<>
			<motion.span
				layoutId="subtext"
				className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl"
			>
				{text}
			</motion.span>

			<motion.span
				layout
				className="relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl inline-flex items-center md:h-14 h-12 dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10"
			>
				<AnimatePresence mode="wait">
					<motion.span
						key={currentIndex}
						initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
						animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
						exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className={cn("inline-block whitespace-nowrap will-change-transform will-change-opacity")}
					>
						{words[currentIndex]}
					</motion.span>
				</AnimatePresence>
			</motion.span>
		</>
	);
};


