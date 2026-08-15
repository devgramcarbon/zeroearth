"use client";

import { useEffect } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 max-h-[85vh] w-full max-w-md animate-[slide-up_0.25s_ease-out] overflow-y-auto rounded-t-[24px] border border-black/10 bg-white p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[0_20px_60px_-20px_rgba(20,20,20,0.25)] sm:mx-4 sm:animate-[fade-in_0.2s_ease-out] sm:rounded-[20px] sm:p-8"
      >
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-black/10 sm:hidden" />

        <div className="mb-6 flex items-start justify-between">
          <h2 id="contact-modal-title" className="text-xl font-bold text-[#141414]">
            Get in touch
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full text-[#5b5b58] transition-colors hover:bg-black/5 hover:text-[#141414]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#40BDA7"
              strokeWidth="1.8"
              className="mt-0.5 h-4 w-4 shrink-0"
            >
              <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#5b5b58]">
                Location
              </p>
              <p className="text-sm leading-relaxed text-[#141414]">
                STPI Building, Technopark Phase I
                <br />
                Technopark Rd, Technopark Campus
                <br />
                Thiruvananthapuram, Kerala 695581
              </p>
            </div>
          </div>

          <a
            href="tel:+917907635263"
            className="flex items-center gap-3 no-underline transition-colors hover:text-[#40BDA7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#40BDA7"
              strokeWidth="1.8"
              className="h-4 w-4 shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#5b5b58]">
                Phone
              </p>
              <p className="text-sm text-[#141414]">+91 79076 35263</p>
            </div>
          </a>

          <a
            href="mailto:ani.v@zeroearth.company"
            className="flex items-center gap-3 no-underline transition-colors hover:text-[#40BDA7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#40BDA7"
              strokeWidth="1.8"
              className="h-4 w-4 shrink-0"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#5b5b58]">
                Email
              </p>
              <p className="text-sm text-[#141414]">ani.v@zeroearth.company</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
