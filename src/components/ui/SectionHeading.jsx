import React from "react";

export const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-12 md:mb-16">
      {eyebrow && (
        <span className="text-accent text-xs tracking-widest uppercase font-semibold block mb-2 font-heading">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary tracking-tight">
        {title}
      </h2>
      <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full"></div>
      {description && (
        <p className="text-text-secondary max-w-2xl text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
