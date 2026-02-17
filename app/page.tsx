import Link from "next/link";

export default function Home() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-10 md:px-10">
        <header className="flex items-center justify-between border-b border-line pb-5">
          <p className="font-mono text-sm tracking-[0.2em] text-muted">GAUGE CLUSTER STUDIO</p>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <Link href="/" className="text-foreground">
              Home
            </Link>
            <Link href="/product" className="hover:text-foreground">
              Product
            </Link>
          </nav>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Custom Digital Dashboards
            </p>
            <h1 className="max-w-3xl font-mono text-4xl leading-tight tracking-tight md:text-6xl">
              Sleek gauge clusters built for modernized classics.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Precision hardware, clean UX, and OEM-style fitment for builders who want a premium cockpit experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                View Product
              </Link>
              <a
                href="#contact"
                className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold transition hover:border-foreground"
              >
                Request Build Sheet
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-6 shadow-[0_10px_40px_rgba(10,20,18,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Signature Cluster</p>
            <p className="mt-3 font-mono text-3xl">$1,490</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              7-inch bonded display, high-contrast day mode, CAN-ready signal handling, and custom bezel options.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• Plug-and-play harness</li>
              <li>• Shift-light and warning overlays</li>
              <li>• Config profile tuned to your build</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {["Fast startup", "Readable in sun", "Made to fit"].map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">{item}</p>
              <p className="mt-2 text-sm text-muted">
                Purpose-built UI and hardware design focused on reliability and daily drivability.
              </p>
            </div>
          ))}
        </section>

        <section id="contact" className="rounded-3xl border border-line bg-surface px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Start Your Build</p>
          <h2 className="mt-3 max-w-2xl font-mono text-3xl leading-tight md:text-4xl">
            Tell us your platform and we will spec your cluster package.
          </h2>
          <p className="mt-4 text-muted">Email: build@gaugeclusterstudio.com</p>
        </section>
      </main>
    </div>
  );
}
