"use client";

import Image from "next/image";

export function IpadMockupSection() {
  return (
    <div className="w-full">
      <Image
        src="/Mockup ipad.png"
        alt="TradeX iPad App"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
