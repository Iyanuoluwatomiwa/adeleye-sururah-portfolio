import React from "react";

export const Card = ({ children, className = "", hover = true }) => {
  return (
    <div
      className={`bg-bg-surface border border-bg-border rounded-lg p-6 md:p-8 transition-all duration-300 ${hover ? "hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
