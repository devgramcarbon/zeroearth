import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-[5vw] py-12 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 10%, rgba(64,189,167,.12), transparent 40%), radial-gradient(circle at 85% 20%, rgba(154,96,168,.12), transparent 40%), radial-gradient(circle at 50% 90%, rgba(251,174,38,.10), transparent 45%)",
          }}
        />

        <div className="relative w-full max-w-2xl text-center">
          <Image
            src="/maintenance.svg"
            alt="Under maintenance illustration"
            width={480}
            height={480}
            priority
            className="mx-auto mb-6 h-auto w-full max-w-[220px] sm:mb-8 sm:max-w-sm"
          />

          <div className="rounded-[20px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(20,20,20,0.18)] sm:p-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FBAE26]/35 bg-[#FBAE26]/[.14] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-[#9a6a10] sm:mb-5 sm:text-xs">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FBAE26] opacity-60" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#FBAE26]" />
              </span>
              Website under maintenance
            </span>

            <h1 className="mb-3 text-xl font-bold text-[#141414] sm:mb-3.5 sm:text-3xl">
              We&apos;re building something new
            </h1>
            <p className="mx-auto mb-2 max-w-md text-sm text-[#5b5b58] sm:text-base">
              Our site is getting a fresh coat of paint. While we put the finishing touches
              on it, feel free to reach out &mdash; we&apos;d love to hear from you.
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-xs italic text-[#5b5b58] sm:mt-8 sm:text-sm">
            ZeroEarth focuses on climate science and builds climate-ready infrastructure for
            execution and financing of decarbonisation programs in hard-to-abate sectors, with a
            current focus on the dairy sector.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
