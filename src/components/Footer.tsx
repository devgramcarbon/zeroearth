import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#141414] text-[#e8e7e2]">
      <div className="h-[3px] w-full bg-gradient-to-r from-[#40BDA7] via-[#9A60A8] to-[#FBAE26]" />

      <div className="w-full px-[5vw] py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-12">
          <div>
            <Image
              src="/white.svg"
              alt="ZeroEarth"
              width={168}
              height={37}
              className="mb-4 h-8 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#9c9b96]">
              Climate-ready infrastructure for the execution and financing of decarbonisation
              programs in hard-to-abate sectors.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#9c9b96]">
              Location
            </h2>
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
              <p className="text-sm leading-relaxed text-[#c8c7c2]">
                STPI Building, Technopark Phase I
                <br />
                Technopark Rd, Technopark Campus
                <br />
                Thiruvananthapuram, Kerala 695581
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#9c9b96]">
              Contact
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+917907635263"
                className="flex items-center gap-3 text-sm text-[#c8c7c2] no-underline transition-colors hover:text-[#40BDA7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                +91 79076 35263
              </a>
              <a
                href="mailto:ani.v@zeroearth.company"
                className="flex items-center gap-3 text-sm text-[#c8c7c2] no-underline transition-colors hover:text-[#40BDA7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                ani.v@zeroearth.company
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-white/10 sm:my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-[0.8rem] text-[#7d7c78] sm:flex-row sm:text-left">
          <p>&copy; 2026 ZeroEarth Private Limited. All rights reserved.</p>
          <p>Thiruvananthapuram, India</p>
        </div>
      </div>
    </footer>
  );
}
