import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profileData } from "../../assets/data";
import { Button } from "../ui/Button";

export const Navbar = ({ onOpenMobile }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#what-i-do" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-bg-main/85 backdrop-blur-md border-b border-bg-border py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="font-heading font-bold text-xl text-text-primary tracking-wider flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded bg-bg-surface border border-bg-border flex items-center justify-center text-accent text-sm font-semibold group-hover:border-accent transition-colors">
            {profileData.monogram}
          </span>
          <span className="hidden sm:inline font-medium text-sm text-text-secondary group-hover:text-text-primary transition-colors">
            Adeleye S.A.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button href="#contact" variant="outline" className="py-2 text-xs">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
          aria-label="Open Mobile Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
