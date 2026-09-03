import { Award, BadgeCheck, CalendarDays } from "lucide-react";

import { profileData } from "../../assets/data";

export function Certifications() {
  const { certifications } = profileData;

  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        border-b border-bg-border
        bg-bg-secondary
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
                07 — Certifications
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
              Professional
              <br />
              <span className="text-text-secondary">development.</span>
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
              Continuous learning that strengthens professional capability.
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
              Professional training and certifications that complement my
              academic background and support my work across education,
              counselling, communication and organizational environments.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          {certifications.map((item, index) => (
            <article
              key={`${item.title}-${item.year}`}
              className="
                group
                relative
                border-t border-bg-border
                py-8
                transition-colors
                duration-500
                lg:py-10
              "
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
                {/* Number / Icon */}
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
                    <Award size={19} strokeWidth={1.5} />
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
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
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
                      <BadgeCheck size={11} strokeWidth={1.7} />
                      Certified
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      max-w-2xl
                      font-heading
                      text-xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-text-primary
                      transition-colors
                      duration-500
                      group-hover:text-accent
                      sm:text-2xl
                    "
                  >
                    {item.title}
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
                    {item.issuer}
                  </p>
                </div>

                {/* Year */}
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
                    {item.year}
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

          <div
            className="
              border-t
              border-bg-border
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
              Professional development remains an ongoing part of my journey,
              strengthening both my knowledge and ability to contribute
              effectively.
            </p>
          </div>
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
          <span
            className="
              font-heading
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-text-muted
            "
          >
            Learn • Develop • Contribute
          </span>

          <span
            className="
              text-xs
              text-text-muted
            "
          >
            Academic • Professional • Continuous
          </span>
        </div>
      </div>
    </section>
  );
}
