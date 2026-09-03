import { ArrowUp, Mail } from "lucide-react";
import { profileData } from "../../assets/data";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const { name, eyebrow, contacts } = profileData;

  return (
    <footer className="relative bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div
          className="
            flex
            flex-col
            gap-10
            border-b
            border-bg-border
            pb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Brand */}

          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-4"
              aria-label={`${name} - Back to home`}
            >
              <BrandLogo size="md" />

              <div>
                <p
                  className="
                  font-heading
                  text-sm
                  font-semibold
                  tracking-tight
                  text-text-primary
                "
                >
                  {name}
                </p>

                <p
                  className="
                  mt-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-text-muted
                "
                >
                  {eyebrow}
                </p>
              </div>
            </a>
          </div>
          {/* Email */}
          <a
            href={`mailto:${contacts.email}`}
            className="
              group
              inline-flex
              items-center
              gap-3
              text-sm
              text-text-secondary
              transition-colors
              duration-300
              hover:text-accent
            "
          >
            <Mail
              size={15}
              strokeWidth={1.5}
              className="text-text-muted transition-colors duration-300 group-hover:text-accent"
            />

            {contacts.email}

            <span
              className="
                h-px
                w-0
                bg-accent
                transition-all
                duration-300
                group-hover:w-5
              "
            />
          </a>
        </div>

        <div
          className="
            flex
            flex-col
            gap-8
            py-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
            "
          >
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "What I Do", href: "#what-i-do" },
              { label: "Experience", href: "#experience" },
              { label: "Education", href: "#education" },
              { label: "Skills", href: "#skills" },
              { label: "Certifications", href: "#certifications" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-text-muted
                  transition-colors
                  duration-300
                  hover:text-text-primary
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="
              group
              inline-flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-bg-border
              bg-bg-main
              text-text-muted
              transition-all
              duration-300
              hover:border-accent/40
              hover:text-accent
            "
          >
            <ArrowUp
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-bg-border
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-text-muted
            "
          >
            © {new Date().getFullYear()} {name}
          </p>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-text-muted
            "
          >
            Guidance • Support • Professional Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
