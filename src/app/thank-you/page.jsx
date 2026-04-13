import Link from "next/link";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/navbar";
import SiteFooter from "@/components/layout/site-footer";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full
              border border-white/10 bg-white/[0.03]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-64 w-64 rounded-full
              border border-white/10 bg-patriot-red/[0.06]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-2 lg:block"
          >
            <div className="h-2/5 w-full bg-patriot-red" />
            <div className="h-3/5 w-full bg-navy-700" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center
              overflow-hidden select-none"
          >
            <span
              className="font-display font-black text-white/[0.04] text-[140px] lg:text-[200px]
              leading-none tracking-tight whitespace-nowrap"
            >
              THANK YOU
            </span>
          </div>

          <div className="relative mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <div
                className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full
                bg-patriot-red/15 border border-patriot-red/30"
              >
                <CheckCircle2
                  className="h-8 w-8 text-patriot-red"
                  strokeWidth={2.25}
                />
              </div>
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
                Submission Received
              </p>
              <h1
                className="font-display font-extrabold text-[clamp(2.5rem,6vw,3.5rem)]
                leading-[1.08] text-white mb-6"
              >
                Thank You!
              </h1>
              <p className="font-body text-lg lg:text-xl text-white/80 leading-relaxed">
                Your message has been received. Watch your email for more
                instructions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-off-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
              <div className="rounded-2xl border border-warm-100 bg-white p-8 lg:p-10">
                <div
                  className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg
                  bg-patriot-red/[0.08]"
                >
                  <Mail className="h-5 w-5 text-patriot-red" />
                </div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-3">
                  Check your inbox
                </h2>
                <p className="font-body text-base text-warm-600 leading-relaxed mb-6">
                  We&apos;ve sent a confirmation to the email address you
                  provided. If you don&apos;t see it in a few minutes, check
                  your spam or promotions folder.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-body font-semibold text-base
                    text-white bg-patriot-red hover:bg-red-dark py-3 px-6 rounded-lg
                    transition-colors duration-200"
                >
                  Back to Home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-2xl border border-warm-100 bg-warm-50 p-8 lg:p-10">
                <p className="font-body text-xs font-bold uppercase tracking-[2px] text-patriot-red mb-3">
                  Keep Going
                </p>
                <h3 className="font-display font-bold text-xl text-navy-900 mb-4">
                  Help build the movement
                </h3>
                <p className="font-body text-sm text-warm-600 leading-relaxed mb-6">
                  Share Jenny&apos;s campaign with friends and family, or get
                  involved directly.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center justify-between gap-2 font-body font-semibold
                      text-sm text-navy-900 bg-white border border-warm-100 hover:border-patriot-red
                      hover:text-patriot-red py-3 px-5 rounded-lg transition-colors duration-200"
                  >
                    Volunteer with us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/events"
                    className="inline-flex items-center justify-between gap-2 font-body font-semibold
                      text-sm text-navy-900 bg-white border border-warm-100 hover:border-patriot-red
                      hover:text-patriot-red py-3 px-5 rounded-lg transition-colors duration-200"
                  >
                    See upcoming events
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ThankYou;
