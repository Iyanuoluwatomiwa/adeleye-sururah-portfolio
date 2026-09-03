import React from "react";
import { profileData } from "../../assets/data";

export const BrandLogo = ({ size = "sm" }) => {
  const sizes = {
    sm: {
      wrapper: "h-10 w-10 rounded-xl",
      text: "text-xs",
      crescent: "h-4 w-4 -right-1 -top-1",
      star: "h-1 w-1 right-1.5 top-1",
    },
    md: {
      wrapper: "h-12 w-12 rounded-xl",
      text: "text-sm",
      crescent: "h-5 w-5 -right-1 -top-1",
      star: "h-1.5 w-1.5 right-1.5 top-1.5",
    },
  };

  const currentSize = sizes[size] || sizes.sm;

  return (
    <span
      aria-hidden="true"
      className={`
        relative
        flex
        ${currentSize.wrapper}
        items-center
        justify-center
        overflow-hidden
        border
        border-bg-border
        bg-bg-surface
        font-heading
        font-semibold
        tracking-[-0.04em]
        text-text-primary
        transition-all
        duration-300
        group-hover:border-accent/60
        group-hover:shadow-[0_0_24px_rgba(0,168,150,0.08)]
      `}
    >
      {/* ASA Monogram */}
      <span className={`relative z-10 ${currentSize.text}`}>
        {profileData.monogram}
      </span>

      {/* Crescent */}
      <span
        className={`
          absolute
          ${currentSize.crescent}
          rounded-full
          border
          border-accent/60
        `}
      />

      {/* Accent Star */}
      <span
        className={`
          absolute
          ${currentSize.star}
          rounded-full
          bg-accent
          shadow-[0_0_8px_rgba(0,168,150,0.8)]
        `}
      />
    </span>
  );
};
