import React from "react";
import { profileData } from "../../assets/data";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-bg-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-lg text-text-primary">
            {profileData.name}
          </h3>
          <p className="text-text-muted text-xs mt-1">
            Counsellor Education • Student Support • Professional Support
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={`mailto:${profileData.contacts.email}`}
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${profileData.contacts.phonePrimary}`}
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        <div className="text-text-muted text-xs text-center md:text-right">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
