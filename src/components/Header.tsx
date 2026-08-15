"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/10 bg-[#fbfaf7]">
      <div className="h-[3px] w-full bg-gradient-to-r from-[#40BDA7] via-[#9A60A8] to-[#FBAE26]" />
      <div className="flex w-full items-center justify-between gap-3 px-[5vw] py-3.5 sm:py-4">
        <Image src="/ze.svg" alt="ZeroEarth" width={168} height={37} priority className="h-6 w-auto shrink-0 sm:h-9" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="shrink-0 rounded-full border border-black/10 px-3.5 py-2 text-xs font-medium text-[#141414] transition-colors hover:border-[#40BDA7] hover:text-[#40BDA7] sm:px-4 sm:text-sm"
        >
          Contact us
        </button>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
