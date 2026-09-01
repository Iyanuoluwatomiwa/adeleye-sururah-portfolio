import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import { profileData } from "../../assets/data";

export function Hero() {
  const { name, eyebrow, tagline, summary, cvPath } = profileData;

  return (
    <section
      id="hero"
      className="
      relative isolate
      min-h-[100svh]
      overflow-hidden
      border-b border-bg-border
      bg-bg-main
      pt-20
      lg:pt-24
    "
    >
      {/* =====================================
          ATMOSPHERIC BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[55%] top-[35%]
          h-[520px] w-[520px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-accent/[0.045]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 top-20
          h-80 w-80
          rounded-full
          bg-accent/[0.025]
          blur-[90px]
        "
      />

      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#F5F5F5_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F5_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* =====================================
          CONTENT
      ====================================== */}

      <div
        className="
        relative mx-auto flex
        min-h-[calc(100svh-5rem)]
        max-w-7xl items-center
        px-6 py-10
        sm:py-14
        lg:min-h-[calc(100svh-6rem)]
        lg:px-8
        lg:py-8"
      >
        <div
          className="
            grid w-full
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-8
          "
        >
          {/* =================================
              LEFT — PERSONAL INTRO
          ================================= */}

          <div className="relative z-10">
            {/* Eyebrow */}
            <div
              className="
                animate-fade-up
                flex items-center gap-3
              "
              style={{ animationDelay: "100ms" }}
            >
              <span className="h-px w-9 bg-accent" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-accent
                  sm:text-xs
                "
              >
                {eyebrow}
              </span>
            </div>

            {/* Name */}
            <h1
              className="
                animate-fade-up
                mt-7
                max-w-4xl
                font-heading
                text-[clamp(3.4rem,8vw,7.7rem)]
                font-semibold
                leading-[0.84]
                tracking-[-0.065em]
              "
              style={{ animationDelay: "200ms" }}
            >
              <span className="block text-text-primary">Adeleye</span>

              <span className="block text-text-secondary">Sururah</span>

              <span className="block text-text-primary">
                Aderibigbe
                <span className="text-accent">.</span>
              </span>
            </h1>

            {/* Professional statement */}
            <div
              className="
                animate-fade-up
                mt-8 max-w-2xl
              "
              style={{ animationDelay: "350ms" }}
            >
              <h2
                className="
                  font-heading
                  text-xl
                  font-medium
                  leading-tight
                  text-text-primary
                  sm:text-2xl
                  lg:text-[1.7rem]
                "
              >
                {tagline}
              </h2>

              <p
                className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-text-secondary
                sm:mt-5
                sm:text-base
                sm:leading-7
              "
              >
                A Counsellor Education graduate with experience across student
                support, teaching, administrative coordination and
                people-centered professional support.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="
                animate-fade-up
                mt-7
                sm:mt-8
                flex flex-wrap
                gap-3
              "
              style={{ animationDelay: "500ms" }}
            >
              <a
                href={cvPath}
                download
                className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-accent
                px-6
                py-3.5
                text-sm
                font-semibold
                text-bg-main
                shadow-[0_10px_35px_rgba(0,168,150,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-accent-hover
                hover:shadow-[0_14px_45px_rgba(0,168,150,0.22)]
              "
              >
                <Download size={17} strokeWidth={2} />
                Download CV
              </a>

              <a
                href="#about"
                className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border border-bg-border
                bg-bg-surface
                px-6
                py-3.5
                text-sm
                font-semibold
                text-text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent/50
                hover:bg-bg-secondary
              "
              >
                Discover More
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-accent
                  "
                />
              </a>
            </div>

            {/* Scroll cue */}
            <a
              href="#about"
              className="
                animate-fade-up
                mt-9 
                sm:mt-12
                inline-flex
                items-center
                gap-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-text-muted
                transition-colors
                duration-300
                hover:text-accent
              "
              style={{ animationDelay: "650ms" }}
            >
              Scroll to explore
              <ArrowDown size={14} />
            </a>
          </div>

          {/* =================================
              RIGHT — VISUAL IDENTITY
          ================================= */}

          <div
            className="
              relative
              mx-auto
              hidden
              h-[460px]
              w-full
              max-w-[500px]
              xl:h-[520px]
              xl:max-w-[520px]
              lg:block
            "
          >
            {/* Large orbital circle */}
            <div
              className="
                absolute
                left-1/2 top-1/2
                h-[360px] w-[360px]
                xl:h-[410px] xl:w-[410px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-bg-border/80
              "
            />

            {/* Dashed orbit */}
            <div
              className="
                absolute
                left-1/2 top-1/2
                h-[295px] w-[295px]
                xl:h-[340px] xl:w-[340px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-dashed
                border-accent/20
                animate-[spin_30s_linear_infinite]
              "
            />

            {/* Central visual */}
            <div
              className="
                animate-float
                absolute
                left-1/2 top-1/2
                flex
                h-[225px] w-[225px]
                xl:h-[270px] xl:w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-bg-border
                bg-bg-secondary
                shadow-2xl
                shadow-black/30
              "
            >
              {/* Inner glow */}
              <div
                className="
                  absolute
                  h-52 w-52
                  rounded-full
                  bg-accent/[0.035]
                  blur-3xl
                "
              />

              {/* Monogram */}
              <div className="relative">
                <span
                  className="
                    font-heading
                    text-[8rem]
                    font-semibold
                    leading-none
                    tracking-[-0.12em]
                    text-text-primary/[0.08]
                  "
                >
                  ASA
                </span>

                {/* Crescent */}
                <span
                  className="
                    absolute
                    -right-2
                    top-3
                    h-16
                    w-16
                    rounded-full
                    border
                    border-accent/60
                  "
                />

                {/* Star */}
                <span
                  className="
                    absolute
                    right-1
                    top-0
                    h-2
                    w-2
                    rounded-full
                    bg-accent
                    shadow-[0_0_18px_rgba(0,168,150,0.7)]
                  "
                />
              </div>
            </div>

            {/* =================================
                TOP LABEL
            ================================= */}

            <div
              className="
                absolute
                right-0
                top-12
                flex
                items-center
                gap-3
                border
                border-bg-border
                bg-bg-secondary/80
                px-4 py-3
                backdrop-blur-xl
              "
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-text-muted
                  "
                >
                  Current Focus
                </p>

                <p className="mt-1 font-heading text-xs text-text-primary">
                  People • Support • Growth
                </p>
              </div>
            </div>

            {/* =================================
                LOWER LABEL
            ================================= */}

            <div
              className="
                absolute
                bottom-10
                left-0
                w-60
                border
                border-bg-border
                bg-bg-main/90
                p-5
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                Professional Identity
              </p>

              <p
                className="
                  mt-3
                  font-heading
                  text-lg
                  font-medium
                  leading-snug
                  text-text-primary
                "
              >
                Guidance, empathy and purposeful support.
              </p>
            </div>

            {/* Decorative coordinates */}
            <div className="absolute bottom-4 right-5">
              <p className="font-heading text-[10px] tracking-[0.2em] text-text-muted">
                09° 05′ N
              </p>

              <p className="mt-1 font-heading text-[10px] tracking-[0.2em] text-text-muted">
                07° 29′ E
              </p>
            </div>

            {/* Orbit dot */}
            <span
              className="
                absolute
                left-[70px]
                top-[110px]
                h-2
                w-2
                rounded-full
                bg-accent
                shadow-[0_0_20px_rgba(0,168,150,0.5)]
              "
            />
          </div>
        </div>
      </div>

      {/* Bottom edge metadata */}
      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          hidden
          items-center
          justify-between
          lg:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
          Oyo State • Nigeria
        </span>

        <span className="font-heading text-[10px] text-text-muted">
          01 / 09
        </span>
      </div>
    </section>
  );
}
