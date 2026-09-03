import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

import { profileData } from "../../assets/data";
import { createWhatsAppLink } from "../../utils/whatsapp";

export function Contact() {
  const { contacts } = profileData;

  const whatsappUrl = createWhatsAppLink(
    contacts.whatsappNumber,
    contacts.defaultWhatsappMessage,
  );

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-b border-bg-border
        bg-bg-main
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />

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
                09 — Contact
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
              Let's
              <br />
              <span className="text-text-secondary">connect.</span>
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
              Good work begins with a meaningful conversation.
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
              Whether you would like to discuss an opportunity, collaborate on a
              project, or simply connect professionally, I would be glad to hear
              from you.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:mt-24
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border border-bg-border
              bg-bg-surface
              p-7
              transition-all
              duration-500
              hover:border-accent/30
              sm:p-9
              lg:p-10
            "
          >
            <div className="relative z-10">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border border-accent/20
                  bg-accent/5
                  text-accent
                "
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </div>

              <p
                className="
                  mt-8
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                "
              >
                Start a conversation
              </p>

              <h3
                className="
                  mt-3
                  max-w-lg
                  font-heading
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-text-primary
                  sm:text-3xl
                "
              >
                Have something in mind?
              </h3>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  leading-6
                  text-text-secondary
                "
              >
                The quickest way to reach me is through WhatsApp. I'm open to
                professional conversations, opportunities and meaningful
                connections.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-accent
                  px-5
                  py-3.5
                  text-xs
                  font-bold
                  tracking-wide
                  text-bg-main
                  transition-all
                  duration-300
                  hover:bg-accent-hover
                  hover:scale-[1.02]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-accent
                  focus:ring-offset-2
                  focus:ring-offset-bg-surface
                "
              >
                <MessageCircle size={17} strokeWidth={2} />
                Let's Talk on WhatsApp
                <ArrowUpRight size={15} strokeWidth={2} />
              </a>
            </div>

            {/* Decorative number */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-8
                -right-2
                font-heading
                text-[9rem]
                font-semibold
                leading-none
                tracking-[-0.08em]
                text-text-primary/2.5
              "
            >
              09
            </span>
          </div>

          <div
            className="
              rounded-2xl
              border border-bg-border
              bg-bg-secondary
              p-7
              sm:p-9
              lg:p-10
            "
          >
            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-8 bg-bg-border" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                "
              >
                Contact Details
              </span>
            </div>

            <div className="divide-y divide-bg-border">
              {/* Email */}
              <a
                href={`mailto:${contacts.email}`}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  py-5
                  first:pt-0
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border border-bg-border
                    bg-bg-surface
                    text-text-muted
                    transition-all
                    duration-300
                    group-hover:border-accent/30
                    group-hover:text-accent
                  "
                >
                  <Mail size={16} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      break-all
                      text-sm
                      text-text-primary
                      transition-colors
                      duration-300
                      group-hover:text-accent
                    "
                  >
                    {contacts.email}
                  </p>
                </div>
              </a>

              {/* Primary phone */}
              <a
                href={`tel:${contacts.phonePrimary}`}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  py-5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border border-bg-border
                    bg-bg-surface
                    text-text-muted
                    transition-all
                    duration-300
                    group-hover:border-accent/30
                    group-hover:text-accent
                  "
                >
                  <Phone size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-text-primary
                      transition-colors
                      duration-300
                      group-hover:text-accent
                    "
                  >
                    {contacts.phonePrimary}
                  </p>
                </div>
              </a>

              {/* Secondary phone */}
              <a
                href={`tel:${contacts.phoneSecondary}`}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  py-5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border border-bg-border
                    bg-bg-surface
                    text-text-muted
                    transition-all
                    duration-300
                    group-hover:border-accent/30
                    group-hover:text-accent
                  "
                >
                  <Phone size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Alternative Phone
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-text-primary
                      transition-colors
                      duration-300
                      group-hover:text-accent
                    "
                  >
                    {contacts.phoneSecondary}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  py-5
                  last:pb-0
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border border-bg-border
                    bg-bg-surface
                    text-text-muted
                  "
                >
                  <MapPin size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1
                      max-w-sm
                      text-sm
                      leading-6
                      text-text-primary
                    "
                  >
                    {contacts.address}
                  </p>
                </div>
              </div>
            </div>
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
          <p
            className="
              max-w-xl
              text-xs
              leading-6
              text-text-muted
            "
          >
            Open to meaningful professional conversations, collaboration and
            opportunities to contribute.
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
            Connect • Collaborate • Grow
          </span>
        </div>
      </div>
    </section>
  );
}
