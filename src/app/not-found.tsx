import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
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

        <div className="relative w-full max-w-md text-center">
          <Image
            src="/404.svg"
            alt="Page not found illustration"
            width={480}
            height={480}
            priority
            className="mx-auto mb-6 h-auto w-full max-w-[220px] sm:mb-8 sm:max-w-sm"
          />

          <div className="rounded-[20px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(20,20,20,0.18)] sm:p-10">
            <h1 className="mb-3 text-xl font-bold text-[#141414] sm:mb-3.5 sm:text-3xl">
              Page not found
            </h1>
            <p className="mx-auto mb-6 max-w-sm text-sm text-[#5b5b58] sm:text-base">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-[#141414] transition-colors hover:border-[#40BDA7] hover:text-[#40BDA7]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
