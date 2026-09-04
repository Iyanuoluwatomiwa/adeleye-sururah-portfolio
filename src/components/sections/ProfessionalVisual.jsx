import React from "react";
import {
  BookOpen,
  CalendarDays,
  HeartHandshake,
  Headphones,
  LaptopMinimal,
  MessageCircle,
  UsersRound,
} from "lucide-react";

const nodes = [
  {
    icon: HeartHandshake,
    className: "left-[5%] top-[27%]",
    delay: "animation-delay-[0ms]",
  },
  {
    icon: BookOpen,
    className: "left-[20%] top-[8%]",
    delay: "animation-delay-[700ms]",
  },
  {
    icon: LaptopMinimal,
    className: "right-[16%] top-[8%]",
    delay: "animation-delay-[1200ms]",
  },
  {
    icon: Headphones,
    className: "right-[2%] top-[34%]",
    delay: "animation-delay-[500ms]",
  },
  {
    icon: CalendarDays,
    className: "right-[14%] bottom-[10%]",
    delay: "animation-delay-[1000ms]",
  },
  {
    icon: UsersRound,
    className: "left-[17%] bottom-[8%]",
    delay: "animation-delay-[1500ms]",
  },
  {
    icon: MessageCircle,
    className: "left-[1%] bottom-[30%]",
    delay: "animation-delay-[900ms]",
  },
];

export function ProfessionalVisual() {
  return (
    <div className="relative h-full w-full select-none">
      {/* Soft atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          h-[62%] w-[62%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-accent/8
          blur-[90px]
        "
      />

      {/* Orbit system */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          h-[78%] w-[78%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-accent/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          h-[58%] w-[58%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-bg-border/80
        "
      />

      {/* Connection network */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-50"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="0.18"
          className="text-accent/35"
        >
          <line x1="50" y1="50" x2="10" y2="32" />
          <line x1="50" y1="50" x2="27" y2="14" />
          <line x1="50" y1="50" x2="78" y2="14" />
          <line x1="50" y1="50" x2="94" y2="39" />
          <line x1="50" y1="50" x2="83" y2="87" />
          <line x1="50" y1="50" x2="26" y2="89" />
          <line x1="50" y1="50" x2="8" y2="70" />
        </g>

        <g fill="currentColor" className="text-accent/35">
          <circle cx="10" cy="32" r="0.7" />
          <circle cx="27" cy="14" r="0.7" />
          <circle cx="78" cy="14" r="0.7" />
          <circle cx="94" cy="39" r="0.7" />
          <circle cx="83" cy="87" r="0.7" />
          <circle cx="26" cy="89" r="0.7" />
          <circle cx="8" cy="70" r="0.7" />
        </g>
      </svg>

      {/* Decorative orbit dots */}
      <span
        aria-hidden="true"
        className="
          absolute left-[13%] top-[19%]
          h-1.5 w-1.5 rounded-full
          bg-accent
          shadow-[0_0_12px_rgba(0,168,150,0.8)]
          animate-pulse
        "
      />

      <span
        aria-hidden="true"
        className="
          absolute right-[9%] top-[18%]
          h-1 w-1 rounded-full
          bg-text-primary/70
          animate-pulse
        "
      />

      <span
        aria-hidden="true"
        className="
          absolute bottom-[18%] left-[8%]
          h-1 w-1 rounded-full
          bg-accent/70
          animate-pulse
        "
      />

      {/* Central professional identity */}
      <div
        className="
          absolute left-1/2 top-1/2
          flex
          h-55 w-55
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-accent/20
          bg-bg-main/55
          shadow-[0_0_80px_rgba(0,168,150,0.08)]
          backdrop-blur-sm
          xl:h-68 xl:w-68
        "
      >
        {/* Inner ring */}
        <div
          className="
            absolute inset-4
            rounded-full
            border border-bg-border/80
          "
        />

        {/* Rotating accent ring */}
        <div
          aria-hidden="true"
          className="
            absolute inset-2
            rounded-full
            border border-transparent
            border-t-accent/60
            border-r-accent/20
            animate-[spin_18s_linear_infinite]
          "
        />

        {/* Person / people-centered symbol */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="
              flex h-13 w-13 items-center justify-center
              rounded-full
              border border-accent/30
              bg-bg-surface
              text-accent
              shadow-[0_0_28px_rgba(0,168,150,0.12)]
              xl:h-15 xl:w-15
            "
          >
            <UsersRound size={25} strokeWidth={1.6} className="xl:h-7 xl:w-7" />
          </div>

          <div
            className="
              mt-2 h-15 w-23
              rounded-[50%_50%_30%_30%]
              border border-accent/20
              bg-bg-surface
              shadow-[0_0_30px_rgba(0,168,150,0.08)]
              xl:h-18 xl:w-27
            "
          />

          {/* Accent line */}
          <span
            aria-hidden="true"
            className="
              mt-3 h-px w-10
              bg-accent/70
              shadow-[0_0_10px_rgba(0,168,150,0.5)]
            "
          />
        </div>

        {/* Central orbital marker */}
        <span
          aria-hidden="true"
          className="
            absolute right-[13%] top-[24%]
            h-2 w-2 rounded-full
            bg-accent
            shadow-[0_0_14px_rgba(0,168,150,0.8)]
          "
        />
      </div>

      {/* Career capability nodes */}
      {nodes.map(({ icon: Icon, className, delay }, index) => (
        <div
          key={index}
          className={`
            absolute ${className}
            flex
            h-10 w-10
            items-center justify-center
            rounded-full
            border border-bg-border
            bg-bg-surface/90
            text-text-secondary
            shadow-[0_10px_30px_rgba(0,0,0,0.22)]
            backdrop-blur-md
            transition-all
            duration-500
            hover:border-accent/50
            hover:text-accent
            hover:shadow-[0_0_25px_rgba(0,168,150,0.12)]
            animate-pulse
            ${delay}
            sm:h-11 sm:w-11
            xl:h-12 xl:w-12
          `}
        >
          <Icon
            size={17}
            strokeWidth={1.6}
            className="sm:h-4.5 sm:w-4.5 xl:h-5 xl:w-5"
          />
        </div>
      ))}
    </div>
  );
}
