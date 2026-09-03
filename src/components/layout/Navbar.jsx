import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { profileData } from "../../assets/data";
import { BrandLogo } from "./BrandLogo";

export const Navbar = ({ onOpenMobile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const primaryLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#what-i-do" },
    { name: "Experience", href: "#experience" },
  ];

  const moreLinks = [
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMoreOpen(false);
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "border-b border-bg-border bg-bg-main/85 py-4 backdrop-blur-xl"
            : "bg-transparent py-6"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        <a
          href="#home"
          aria-label={`${profileData.name} — Home`}
          className="group flex items-center"
        >
          <BrandLogo size="sm" />
        </a>

        <nav
          aria-label="Primary navigation"
          className="
            hidden
            items-center
            gap-1
            lg:flex
          "
        >
          {primaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="
                rounded-full
                px-4
                py-2
                text-[12px]
                font-medium
                text-text-secondary
                transition-all
                duration-300
                hover:bg-bg-surface
                hover:text-text-primary
              "
            >
              {link.name}
            </a>
          ))}

          {/* More dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                px-4
                py-2
                text-[12px]
                font-medium
                text-text-secondary
                transition-all
                duration-300
                hover:bg-bg-surface
                hover:text-text-primary
              "
            >
              More
              <ChevronDown
                size={13}
                strokeWidth={1.8}
                className={`
                  transition-transform
                  duration-300
                  ${moreOpen ? "rotate-180 text-accent" : ""}
                `}
              />
            </button>

            {moreOpen && (
              <div
                role="menu"
                className="
                  absolute
                  right-0
                  top-[calc(100%+0.75rem)]
                  w-52
                  overflow-hidden
                  rounded-2xl
                  border
                  border-bg-border
                  bg-bg-secondary/95
                  p-2
                  shadow-2xl
                  shadow-black/30
                  backdrop-blur-xl
                "
              >
                <div className="px-3 py-2">
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-text-muted
                    "
                  >
                    Explore
                  </span>
                </div>

                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    role="menuitem"
                    className="
                      flex
                      items-center
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      text-text-secondary
                      transition-all
                      duration-200
                      hover:bg-bg-surface
                      hover:text-text-primary
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div
          className="
            hidden
            items-center
            gap-2
            lg:flex
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-accent
              shadow-[0_0_10px_rgba(0,168,150,0.6)]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-text-muted
            "
          >
            Open to opportunities
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenMobile}
          aria-label="Open navigation menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-bg-border
            bg-bg-surface/80
            text-text-secondary
            transition-all
            duration-300
            hover:border-accent/50
            hover:text-text-primary
            lg:hidden
          "
        >
          <Menu size={20} strokeWidth={1.7} />
        </button>
      </div>
    </header>
  );
};
