import React from "react";
import { X } from "lucide-react";
import { profileData } from "../../assets/data";

export const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-bg-main/98 backdrop-blur-lg">
      <div className="flex items-center justify-between px-6 py-6 border-b border-bg-border">
        <span className="font-heading font-bold text-lg text-accent">
          {profileData.monogram}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-text-secondary hover:text-text-primary focus:outline-none"
          aria-label="Close Mobile Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex flex-col justify-center items-center flex-1 space-y-6 px-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="text-xl font-heading font-medium text-text-primary hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={onClose}
          className="mt-4 px-8 py-3 bg-accent text-bg-main font-semibold rounded-md w-full max-w-xs text-center"
        >
          Let's Connect
        </a>
      </nav>
    </div>
  );
};
