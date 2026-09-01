import {
  HeartHandshake,
  Headphones,
  Layers3,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

import { profileData } from "../../assets/data";

const icons = [HeartHandshake, Headphones, Layers3, UsersRound];

export function About() {
  const { summary, strengths } = profileData;

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-b border-bg-border
        bg-bg-secondary
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* =================================
            HEADER
        ================================= */}

        <div
          className="
          grid
          gap-10
          lg:grid-cols-[0.32fr_0.68fr]
          lg:items-start
        "
        >
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                02 — About
              </span>
            </div>

            <h2
              className="
                mt-6
                max-w-xs
                font-heading
                text-4xl
                font-semibold
                leading-[0.92]
                tracking-[-0.045em]
                text-text-primary
                sm:text-5xl
              "
            >
              People first.
              <br />
              <span className="text-text-secondary">Purpose always.</span>
            </h2>
          </div>

          {/* Intro */}
          <div className="max-w-3xl">
            <p
              className="
                font-heading
                text-2xl
                font-medium
                leading-[1.35]
                tracking-tight
                text-text-primary
                sm:text-3xl
                lg:text-[2.5rem]
              "
            >
              A Counsellor Education graduate bringing together{" "}
              <span className="text-accent">
                empathy, communication, education
              </span>{" "}
              and professional coordination.
            </p>

            <p
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-text-secondary
                sm:text-base
              "
            >
              {summary}
            </p>

            <a
              href="#what-i-do"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-text-secondary
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              Explore areas of expertise
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </div>

        {/* =================================
            STRENGTHS
        ================================= */}

        <div
          className="
          mt-16
          grid
          gap-px
          overflow-hidden
          rounded-2xl
          border border-bg-border
          bg-bg-border
          sm:grid-cols-2
          lg:mt-24
          lg:grid-cols-4
        "
        >
          {strengths.map((strength, index) => {
            const Icon = icons[index];

            return (
              <article
                key={strength.title}
                className="
                  group
                  relative
                  bg-bg-surface
                  p-6
                  transition-colors
                  duration-500
                  hover:bg-[#1B1F26]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-6
                    top-6
                    font-heading
                    text-[10px]
                    tracking-[0.15em]
                    text-text-muted
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border border-bg-border
                    text-accent
                    transition-all
                    duration-300
                    group-hover:border-accent/50
                    group-hover:bg-accent/5
                  "
                >
                  <Icon size={18} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    font-heading
                    text-base
                    font-semibold
                    text-text-primary
                  "
                >
                  {strength.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-text-secondary
                  "
                >
                  {strength.desc}
                </p>

                {/* Bottom indicator */}
                <div
                  className="
                    mt-8
                    h-px
                    w-8
                    bg-bg-border
                    transition-all
                    duration-500
                    group-hover:w-16
                    group-hover:bg-accent
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
