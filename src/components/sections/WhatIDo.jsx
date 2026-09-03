import {
  UserCheck,
  GraduationCap,
  BookOpen,
  FileText,
  Monitor,
  MessageSquare,
} from "lucide-react";

import { profileData } from "../../assets/data";

const icons = [
  UserCheck,
  GraduationCap,
  BookOpen,
  FileText,
  Monitor,
  MessageSquare,
];

export function WhatIDo() {
  const { focusAreas } = profileData;

  return (
    <section
      id="what-i-do"
      className="
        relative
        overflow-hidden
        border-b border-bg-border
        bg-bg-main
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div
          className="
          grid
          gap-10
          lg:grid-cols-[0.32fr_0.68fr]
          lg:items-start
        "
        >
          {/* Left */}
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
                03 — What I Do
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
              Areas of
              <br />
              <span className="text-text-secondary">impact.</span>
            </h2>
          </div>

          {/* Right */}
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
              Combining human understanding with practical professional support.
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
              From guidance and student support to administration, virtual
              assistance and communication, my work is centered around helping
              people and organizations function with clarity and purpose.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
        >
          {focusAreas.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.id}
                className="
                  group
                  relative
                  min-h-67.5
                  overflow-hidden
                  rounded-2xl
                  border border-bg-border
                  bg-bg-surface
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-accent/40
                  sm:p-7
                  lg:p-8
                "
              >
                <span
                  className="
                    absolute
                    right-7
                    top-7
                    font-heading
                    text-4xl
                    font-semibold
                    tracking-[-0.06em]
                    text-text-primary/4.5
                    transition-colors
                    duration-500
                    group-hover:text-accent/12
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border border-bg-border
                    bg-bg-secondary
                    text-accent
                    transition-all
                    duration-500
                    group-hover:border-accent/40
                    group-hover:bg-accent/6
                  "
                >
                  <Icon size={18} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <div className="relative mt-10">
                  <h3
                    className="
                      max-w-[85%]
                      font-heading
                      text-lg
                      font-semibold
                      leading-snug
                      text-text-primary
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-text-secondary
                    "
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    right-7
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      h-px
                      w-8
                      bg-bg-border
                      transition-all
                      duration-500
                      group-hover:w-14
                      group-hover:bg-accent
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t border-bg-border
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-lg
              text-xs
              leading-6
              text-text-muted
            "
          >
            A multidisciplinary approach shaped by education, empathy,
            communication and organizational experience.
          </p>

          <span
            className="
              font-heading
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-text-muted
            "
          >
            Guidance • Education • Support
          </span>
        </div>
      </div>
    </section>
  );
}
