import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { MobileMenu } from "./components/layout/MobileMenu";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { Footer } from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { WhatIDo } from "./components/sections/WhatIDo";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Skills } from "./components/sections/Skills";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
// import { Journey } from "./components/sections/Journey";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main text-text-primary font-body relative">
      {/* Navigation */}
      <Navbar onOpenMobile={() => setMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
        {/* <Journey /> */}
      </main>

      {/* Floating CTA & Footer */}
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
