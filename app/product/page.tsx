import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 md:px-10">
        <header className="flex items-center justify-between border-b border-line pb-5">
          <div className="flex items-center gap-3">
            <Image
              src="/LOGO.png"
              alt="Gauge Cluster Studio logo"
              width={32}
              height={32}
              className="rounded-md opacity-80"
            />
            <p className="font-mono text-sm tracking-[0.2em] text-muted">GAUGE CLUSTER STUDIO</p>
          </div>
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">LS400-Cluster</p>
            <h1 className="mt-3 font-mono text-4xl leading-tight">Digital Dashboard for 98-00 LS400</h1>
            <p className="mt-4 text-muted">
              Fully custom digital instrument cluster for the 1998-2000 Lexus LS400 with a modern, high-resolution interface.
            </p>
            <p className="mt-8 inline-flex rounded-full border border-line bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              Pre-Order
            </p>
            <p className="mt-3 font-mono text-4xl">$750</p>
            <p className="mt-2 text-sm text-muted">Pre-order price. Final quote may vary by configuration.</p>
            <p className="mt-4 rounded-2xl border border-line bg-background px-4 py-3 text-xs leading-relaxed text-muted">
              Pre-order disclaimer: This product is currently in pre-order. Expected fulfillment timeframe is 6-8 months.
            </p>
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
              <p className="mt-2 text-sm text-muted">14-inch high-contrast display with refined motion and clean readability.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Integration</p>
              <p className="mt-2 text-sm text-muted">Engineered for 98-00 USDM LS400 with OEM-level signal integration.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Fit and Feel</p>
              <p className="mt-2 text-sm text-muted">Factory-feel presentation with warning overlays and platform-specific tuning.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-lg">Compatibility Note</p>
              <p className="mt-2 text-sm text-muted">LS400s with factory air ride or navigation may have limited indicator coverage.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
