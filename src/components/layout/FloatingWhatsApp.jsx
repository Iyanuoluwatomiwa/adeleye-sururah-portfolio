import { ArrowUpRight } from "lucide-react";

import { profileData } from "../../assets/data";
import { createWhatsAppLink } from "../../utils/whatsapp";

export function FloatingWhatsApp() {
  const whatsappUrl = createWhatsAppLink(
    profileData.contacts.whatsappNumber,
    profileData.contacts.defaultWhatsappMessage,
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Adeleye on WhatsApp"
      className="
        group
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        gap-3
        rounded-full
        border
        border-accent/20
        bg-accent
        px-4
        py-3
        font-medium
        text-bg-main
        shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-accent-hover
        hover:shadow-[0_16px_45px_rgba(0,168,150,0.18)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent
        focus-visible:ring-offset-2
        focus-visible:ring-offset-bg-main
        sm:bottom-6
        sm:right-6
      "
    >
      {/* REAL WHATSAPP MARK */}
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="
          h-5 w-5
          fill-current
        "
      >
        <path
          d="
            M19.11 17.19
            c-.27-.14-1.58-.78-1.83-.87
            -.25-.09-.43-.14-.61.14
            -.18.27-.7.87-.86 1.05
            -.16.18-.32.2-.59.07
            -.27-.14-1.13-.42-2.15-1.34
            -.79-.7-1.33-1.56-1.49-1.83
            -.16-.27-.02-.42.12-.56
            .12-.12.27-.32.41-.48
            .14-.16.18-.27.27-.45
            .09-.18.05-.34-.02-.48
            -.07-.14-.61-1.47-.84-2.01
            -.22-.53-.45-.46-.61-.47
            -.16-.01-.34-.01-.52-.01
            -.18 0-.48.07-.73.34
            -.25.27-.96.94-.96 2.3
            0 1.36.98 2.67 1.11 2.85
            .14.18 1.93 2.95 4.68 4.14
            .65.28 1.16.45 1.56.58
            .66.21 1.26.18 1.74.11
            .53-.08 1.58-.65 1.8-1.28
            .22-.63.22-1.17.16-1.28
            -.07-.11-.25-.18-.52-.32
            z

            M16.01 3
            C8.83 3 3 8.83 3 16
            c0 2.29.6 4.53 1.74 6.49
            L3 29l6.67-1.7A12.94 12.94 0 0 0 16 29
            c7.17 0 13-5.83 13-13S23.18 3 16.01 3
            z

            M16.01 26.86
            c-2.01 0-3.98-.54-5.71-1.56
            l-.41-.24-3.96 1.01 1.06-3.86
            -.27-.42A10.84 10.84 0 0 1 5.14 16
            c0-5.99 4.87-10.86 10.87-10.86
            2.9 0 5.62 1.13 7.67 3.19
            A10.77 10.77 0 0 1 26.86 16
            c0 5.99-4.87 10.86-10.85 10.86
            z
          "
        />
      </svg>

      <span
        className="
          hidden
          text-xs
          font-bold
          tracking-wide
          sm:inline
        "
      >
        Let's Talk
      </span>

      <ArrowUpRight
        size={15}
        className="
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </a>
  );
}
