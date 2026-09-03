import {
  MessageCircle,
  Users,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

import { profileData } from "../../assets/data";

const categoryIcons = [MessageCircle, Users, ClipboardList];

export function Skills() {
  const { skillCategories } = profileData;

  return (
    <section
      id="skills"
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
                06 — Skills
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
              Skills
              <br />
              <span className="text-text-secondary">that create value.</span>
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
              People skills backed by organization, communication and practical
              execution.
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
              A balanced professional toolkit developed through academic
              training, educational practice and real-world administrative
              experience.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index];

            return (
              <article
                key={category.category}
                className="
                  group
                  border-t border-bg-border
                  py-8
                  lg:py-10
                "
              >
                <div
                  className="
                    grid
                    gap-8
                    lg:grid-cols-[0.32fr_0.68fr]
                    lg:items-start
                  "
                >
                  {/* Category */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border border-bg-border
                        bg-bg-surface
                        text-accent
                        transition-all
                        duration-300
                        group-hover:border-accent/40
                      "
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <div>
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          tracking-[0.18em]
                          text-text-muted
                        "
                      >
                        0{index + 1}
                      </span>

                      <h3
                        className="
                          mt-2
                          font-heading
                          text-sm
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                          text-text-primary
                        "
                      >
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills */}
                  <div
                    className="
                      grid
                      gap-x-8
                      gap-y-3
                      sm:grid-cols-2
                    "
                  >
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="
                          group/skill
                          flex
                          items-center
                          justify-between
                          gap-4
                          border-b border-bg-border/70
                          pb-3
                        "
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              bg-text-muted
                              transition-colors
                              duration-300
                              group-hover/skill:bg-accent
                            "
                          />

                          <span
                            className="
                              text-sm
                              leading-6
                              text-text-secondary
                              transition-colors
                              duration-300
                              group-hover/skill:text-text-primary
                            "
                          >
                            {skill}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={14}
                          className="
                            shrink-0
                            text-text-muted
                            opacity-0
                            transition-all
                            duration-300
                            group-hover/skill:translate-x-0.5
                            group-hover/skill:-translate-y-0.5
                            group-hover/skill:text-accent
                            group-hover/skill:opacity-100
                          "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}

          <div
            className="
              border-t border-bg-border
              pt-6
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
                Combining interpersonal awareness with dependable organization
                and professional responsibility.
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
                Communication • Support • Execution
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
