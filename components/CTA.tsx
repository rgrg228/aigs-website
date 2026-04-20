export default function CTA() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-[40px] bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute inset-0 -z-0 opacity-60">
            <div className="blob absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-500" />
            <div className="blob absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-accent-500" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Give your website a{" "}
              <span className="gradient-text">top-performing sales rep</span>{" "}
              — tonight.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              14-day free trial. No credit card. Cancel anytime. You'll see ROI
              before the trial ends or we'll extend it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#signup" className="btn-primary bg-white text-brand-700 shadow-none hover:bg-white/90">
                Start free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book a 15-min demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
