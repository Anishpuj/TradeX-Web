import { cn } from "@/lib/utils"

type MarqueeProps = {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  vertical?: boolean
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(2)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              !vertical ? "animate-marquee" : "animate-marquee-vertical",
              {
                "[animation-direction:reverse]": reverse,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "flex-row": !vertical,
                "flex-col": vertical,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

export function MarqueeText({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("text-sm font-medium text-gray-500 whitespace-nowrap", className)} {...props}>
      {children}
    </span>
  )
}
