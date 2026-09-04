import React from "react";
import { ArrowDown, Download } from "lucide-react";

import { profileData } from "../../assets/data";
import cvFile from "../../assets/Adeleye_Sururah_CV.pdf";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { ProfessionalVisual } from "./ProfessionalVisual";

export function Hero() {
  const { name, eyebrow, tagline, summary } = profileData;

  const whatsappUrl = createWhatsAppLink(
    profileData.contacts.whatsappNumber,
    profileData.contacts.defaultWhatsappMessage,
  );

  return (
    <section
      id="home"
      className="
        relative isolate min-h-svh
        overflow-hidden
        border-b border-bg-border
        bg-bg-main
        pt-22
        sm:pt-24
        lg:pt-26
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 top-1/4
          h-96 w-96
          rounded-full
          bg-accent/5
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 top-[15%]
          h-150 w-150
          rounded-full
          bg-accent/4
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-size-[72px_72px]
        "
      />

      <div
        className="
          relative mx-auto
          flex min-h-[calc(100svh-4rem)]
          max-w-7xl
          items-center
          px-5 py-8
          sm:px-6 sm:py-10
          lg:min-h-[calc(100svh-5rem)]
          lg:px-8
          lg:py-0
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-56
            top-1/2
            h-105 w-105
            -translate-y-1/2
            opacity-35
            sm:-right-48
            sm:h-125 sm:w-125
            sm:opacity-40
            md:-right-36
            md:h-140 md:w-140
            md:opacity-45
            lg:hidden
          "
        >
          <ProfessionalVisual />
        </div>

        <div
          className="
            relative z-10
            grid w-full
            items-center
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-2
            xl:grid-cols-[1.02fr_0.98fr]
            xl:gap-6
          "
        >
          <div
            className="
              relative
              max-w-3xl
              lg:-translate-y-5
              xl:-translate-y-4
            "
          >
            {/* Eyebrow */}
            <div
              className="
                animate-fade-up
                mb-5
                flex items-center gap-3
                sm:mb-6
              "
            >
              <span aria-hidden="true" className="h-px w-7 bg-accent sm:w-9" />

              <span
                className="
                  font-heading
                  text-[0.62rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
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
                max-w-4xl
                font-heading
                text-[clamp(3rem,8vw,6.25rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.065em]
                text-text-primary
                [animation-delay:100ms]
                sm:text-[clamp(3.5rem,8vw,6.5rem)]
                lg:text-[clamp(4.25rem,6vw,6.4rem)]
              "
            >
              {name.split(" ").map((word, index) => (
                <React.Fragment key={`${word}-${index}`}>
                  {index === 0 ? (
                    word
                  ) : (
                    <>
                      {" "}
                      <span
                        className={
                          index === name.split(" ").length - 1
                            ? "text-accent"
                            : ""
                        }
                      >
                        {word}
                      </span>
                    </>
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* Tagline */}
            <p
              className="
                animate-fade-up
                mt-6
                max-w-xl
                font-heading
                text-lg
                font-medium
                leading-snug
                text-text-secondary
                [animation-delay:200ms]
                sm:mt-7
                sm:text-xl
                lg:mt-6
                lg:text-2xl
              "
            >
              {tagline}
            </p>

            {/* Summary */}
            <p
              className="
                animate-fade-up
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-text-muted
                [animation-delay:300ms]
                sm:mt-5
                sm:text-[0.95rem]
                lg:max-w-xl
                lg:text-sm
                lg:leading-6
              "
            >
              {summary}
            </p>

            <div
              className="
                animate-fade-up
                mt-6
                flex flex-wrap items-center gap-3
                [animation-delay:400ms]
                sm:mt-7
              "
            >
              {/* Download CV */}
              <a
                href={cvFile}
                download="Adeleye-Sururah-Aderibigbe-CV.pdf"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border border-accent
                  bg-accent
                  px-5
                  py-3
                  font-heading
                  text-xs
                  font-semibold
                  tracking-wide
                  text-bg-main
                  shadow-[0_10px_30px_rgba(0,168,150,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-accent-hover
                  hover:shadow-[0_14px_35px_rgba(0,168,150,0.18)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg-main
                  sm:px-5.5
                "
              >
                <Download
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />
                Download CV
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Let's Talk on WhatsApp"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border border-bg-border
                  bg-bg-surface/80
                  px-5
                  py-3
                  font-heading
                  text-xs
                  font-semibold
                  tracking-wide
                  text-text-primary
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-accent/50
                  hover:bg-bg-surface
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg-main
                  sm:px-5.5
                "
              >
                {/* REAL WHATSAPP MARK */}
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="
                    h-5 w-5
                    fill-current
                    text-accent
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <path
                    d="
                      M19.11 17.19
                      c-.27-.14-1.58-.78-1.83-.87
                      -.25-.09-.43-.14-.61.14
                      -.18.27-.7.87-.86 1.05
                      -.16.18-.32.2-.59.07
                      -.27-.14-1.13-.42-2.15-1.34
                      -.79-.7-1.33-1.56-1.49-1.83
                      -.16-.27-.02-.42.12-.56
                      .12-.12.27-.32.41-.48
                      .14-.16.18-.27.27-.45
                      .09-.18.05-.34-.02-.48
                      -.07-.14-.61-1.47-.84-2.01
                      -.22-.53-.45-.46-.61-.47
                      -.16-.01-.34-.01-.52-.01
                      -.18 0-.48.07-.73.34
                      -.25.27-.96.94-.96 2.3
                      0 1.36.98 2.67 1.11 2.85
                      .14.18 1.93 2.95 4.68 4.14
                      .65.28 1.16.45 1.56.58
                      .66.21 1.26.18 1.74.11
                      .53-.08 1.58-.65 1.8-1.28
                      .22-.63.22-1.17.16-1.28
                      -.07-.11-.25-.18-.52-.32
                      z

                      M16.01 3
                      C8.83 3 3 8.83 3 16
                      c0 2.29.6 4.53 1.74 6.49
                      L3 29l6.67-1.7A12.94 12.94 0 0 0 16 29
                      c7.17 0 13-5.83 13-13S23.18 3 16.01 3
                      z

                      M16.01 26.86
                      c-2.01 0-3.98-.54-5.71-1.56
                      l-.41-.24-3.96 1.01 1.06-3.86
                      -.27-.42A10.84 10.84 0 0 1 5.14 16
                      c0-5.99 4.87-10.86 10.87-10.86
                      2.9 0 5.62 1.13 7.67 3.19
                      A10.77 10.77 0 0 1 26.86 16
                      c0 5.99-4.87 10.86-10.85 10.86
                      z
                    "
                  />
                </svg>
                Let's Talk on WhatsApp
              </a>
            </div>

            <div
              aria-hidden="true"
              className="
                mt-7
                flex items-center gap-3
                lg:hidden
              "
            >
              <span className="h-px w-8 bg-accent/50" />

              <span
                className="
                  font-heading
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                "
              >
                People • Education • Support • Coordination
              </span>
            </div>

            {/* Scroll cue */}
            <a
              href="#about"
              className="
                animate-fade-up
                mt-8
                inline-flex
                items-center
                gap-3
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-text-muted
                transition-colors
                duration-300
                hover:text-text-primary
                [animation-delay:500ms]
                sm:mt-10
                lg:mt-8
              "
            >
              Scroll to explore
              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  border border-bg-border
                  transition-all
                  duration-300
                  group-hover:border-accent
                "
              >
                <ArrowDown
                  size={14}
                  strokeWidth={1.7}
                  className="animate-bounce"
                />
              </span>
            </a>
          </div>

          <div
            aria-hidden="true"
            className="
              relative
              hidden
              h-105
              w-full
              max-w-125
              justify-self-end
              lg:block
              lg:-translate-y-5
              xl:h-120
              xl:max-w-130
              2xl:h-135
            "
          >
            <ProfessionalVisual />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-5
          left-5
          hidden
          items-center
          gap-3
          text-[0.58rem]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-text-muted
          sm:left-6
          lg:flex
          lg:left-8
        "
      >
        <span className="h-px w-8 bg-bg-border" />
        Oyo State, Nigeria
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          hidden
          items-center
          gap-3
          text-[0.58rem]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-text-muted
          sm:right-6
          lg:flex
          lg:right-8
        "
      >
        <span className="text-accent">01</span>
        <span>/</span>
        <span>08</span>
      </div>
    </section>
  );
}
