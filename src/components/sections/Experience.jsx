import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { profileData } from "../../assets/data";

export function Experience() {
  const { experience } = profileData;

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-b border-bg-border
        bg-bg-secondary
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* =====================================
            SECTION HEADER
        ====================================== */}

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
                04 — Experience
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
              Experience
              <br />
              <span className="text-text-secondary">that matters.</span>
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
              Learning through people, responsibility and real-world
              environments.
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
              My experience spans educational practice, student support and
              public administration, allowing me to develop both people-centered
              and organizational capabilities.
            </p>
          </div>
        </div>

        {/* =====================================
            EXPERIENCE TIMELINE
        ====================================== */}

        <div className="relative mt-16 lg:mt-24">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-1.75
              top-0
              w-px
              bg-bg-border
              sm:left-2.25
            "
          />

          <div className="space-y-12 lg:space-y-16">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="
                  group
                  relative
                  pl-10
                  sm:pl-14
                  lg:pl-16
                "
              >
                {/* Timeline node */}
                <div
                  className="
                    absolute
                    left-0
                    top-1
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-bg-border
                    bg-bg-secondary
                    transition-all
                    duration-500
                    group-hover:border-accent
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-text-muted
                      transition-all
                      duration-500
                      group-hover:bg-accent
                      group-hover:scale-125
                    "
                  />
                </div>

                {/* Experience content */}
                <div
                  className="
                    rounded-2xl
                    border border-bg-border
                    bg-bg-surface
                    p-6
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-accent/30
                    sm:p-8
                    lg:p-10
                  "
                >
                  {/* Top metadata */}
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                    "
                  >
                    <div className="min-w-0">
                      {/* Current indicator */}
                      {item.isCurrent && (
                        <div
                          className="
                            mb-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border border-accent/20
                            bg-accent/6
                            px-3
                            py-1.5
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-accent
                              shadow-[0_0_10px_rgba(0,168,150,0.7)]
                            "
                          />

                          <span
                            className="
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.16em]
                              text-accent
                            "
                          >
                            Current Role
                          </span>
                        </div>
                      )}

                      <h3
                        className="
                          max-w-2xl
                          font-heading
                          text-xl
                          font-semibold
                          leading-tight
                          tracking-tight
                          text-text-primary
                          sm:text-2xl
                        "
                      >
                        {item.role}
                      </h3>

                      <p
                        className="
                          mt-2
                          font-heading
                          text-sm
                          font-medium
                          text-accent
                        "
                      >
                        {item.organization}
                      </p>
                    </div>

                    {/* Period */}
                    <div
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                        text-text-muted
                      "
                    >
                      <CalendarDays size={14} strokeWidth={1.5} />

                      <span
                        className="
                          text-[11px]
                          font-medium
                          tracking-wide
                        "
                      >
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-text-muted
                    "
                  >
                    <MapPin size={14} strokeWidth={1.5} />

                    <span className="text-xs">{item.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-bg-border" />

                  {/* Responsibilities */}
                  <div>
                    <div
                      className="
                        mb-5
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <BriefcaseBusiness
                        size={15}
                        strokeWidth={1.5}
                        className="text-accent"
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-text-muted
                        "
                      >
                        Responsibilities
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            leading-6
                            text-text-secondary
                            sm:text-[15px]
                          "
                        >
                          <span
                            className="
                              mt-2.25
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              bg-accent
                            "
                          />

                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom interaction */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-between
                      border-t border-bg-border
                      pt-6
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-text-muted
                      "
                    >
                      Professional Experience
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="
                        text-text-muted
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-accent
                      "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <div
          className="
            mt-16
            border-t border-bg-border
            pt-6
            lg:mt-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                max-w-xl
                text-xs
                leading-6
                text-text-muted
              "
            >
              Each role has strengthened my ability to communicate, coordinate,
              support and adapt within different professional environments.
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
              People • Practice • Progress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
