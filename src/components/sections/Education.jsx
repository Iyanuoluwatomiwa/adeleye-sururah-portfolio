import { GraduationCap, MapPin, CalendarDays } from "lucide-react";

import { profileData } from "../../assets/data";

export function Education() {
  const { education } = profileData;

  return (
    <section
      id="education"
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
                05 — Education
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
              Education
              <br />
              <span className="text-text-secondary">as foundation.</span>
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
              Building professional capability through learning, practice and
              continuous growth.
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
              My academic background in Counsellor Education provides the
              foundation for my work in guidance, student support, communication
              and people-centered professional environments.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${item.period}`}
              className={`
                group
                relative
                border-t border-bg-border
                py-8
                transition-colors
                duration-500
                lg:py-10
                ${item.featured ? "lg:py-12" : ""}
              `}
            >
              <div
                className="
                  grid
                  gap-7
                  lg:grid-cols-[80px_1fr_180px]
                  lg:items-start
                  lg:gap-10
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    lg:block
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border border-bg-border
                      bg-bg-surface
                      text-accent
                      transition-all
                      duration-500
                      group-hover:border-accent/40
                      group-hover:bg-accent/5
                    "
                  >
                    <GraduationCap size={19} strokeWidth={1.5} />
                  </div>

                  <span
                    className="
                      lg:mt-5
                      block
                      font-heading
                      text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      text-text-muted
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Main content */}
                <div>
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      gap-y-2
                    "
                  >
                    {item.featured && (
                      <span
                        className="
                          rounded-full
                          border border-accent/20
                          bg-accent/6
                          px-3
                          py-1
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-accent
                        "
                      >
                        Academic Foundation
                      </span>
                    )}
                  </div>

                  <h3
                    className="
                      mt-3
                      font-heading
                      text-xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-text-primary
                      sm:text-2xl
                    "
                  >
                    {item.degree}
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
                    {item.institution}
                  </p>

                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-sm
                      leading-6
                      text-text-secondary
                    "
                  >
                    {item.field}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-x-5
                      gap-y-2
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-text-muted
                      "
                    >
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Period */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-text-muted
                    lg:justify-end
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

              {/* Hover accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-accent
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}

          {/* Closing line */}
          <div
            className="
              border-t border-bg-border
              pt-6
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
              A foundation shaped by education, practical experience and an
              ongoing commitment to professional development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
