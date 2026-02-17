import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 md:px-10">
        <header className="flex items-center justify-between border-b border-line pb-5">
          <p className="font-mono text-sm tracking-[0.2em] text-muted">GAUGE CLUSTER STUDIO</p>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <Link href="/product" className="text-foreground">
              Product
            </Link>
          </nav>
        </header>

        <section className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-line bg-surface p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Model One</p>
            <h1 className="mt-3 font-mono text-4xl leading-tight">Custom Gauge Cluster</h1>
            <p className="mt-4 text-muted">
              Built for performance and clarity with an understated UI that still feels premium at every drive.
            </p>
            <p className="mt-8 font-mono text-4xl">$1,490</p>
            <p className="mt-2 text-sm text-muted">Starting price. Final quote depends on platform and harness spec.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:build@gaugeclusterstudio.com"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Request Quote
              </a>
              <Link
                href="/"
                className="rounded-full border border-line bg-background px-6 py-3 text-sm font-semibold transition hover:border-foreground"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Display</p>
              <p className="mt-2 text-sm text-muted">7-inch anti-glare panel with adaptive brightness and high contrast mode.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Integration</p>
              <p className="mt-2 text-sm text-muted">Supports analog sensors and CAN signal mapping with vehicle-specific profiles.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Enclosure</p>
              <p className="mt-2 text-sm text-muted">CNC-cut, OEM-style trim with optional satin black or brushed finish.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Support</p>
              <p className="mt-2 text-sm text-muted">Remote setup call, tuning profile install, and follow-up calibration help.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
