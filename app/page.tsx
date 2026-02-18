import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-10 md:px-10">
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
            <div className="relative mb-5 h-44 overflow-hidden rounded-2xl border border-line bg-background">
              <Image
                src="/products/ls400-cluster/hero.png"
                alt="LS400-Cluster pre-order product preview"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">LS400-Cluster</p>
            <p className="mt-2 inline-flex rounded-full border border-line bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              Pre-Order
            </p>
            <p className="mt-3 font-mono text-3xl">$750</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Digital dashboard for 98-00 LS400 with OEM-style integration, modern layouts, and real-time vehicle data.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• 14-inch high-contrast display</li>
              <li>• Plug-and-play harness design</li>
              <li>• Factory feel with warning overlays</li>
            </ul>
            <p className="mt-6 rounded-2xl border border-line bg-background px-4 py-3 text-xs leading-relaxed text-muted">
              <span className="font-semibold uppercase text-red-600">Pre-Order Disclaimer:</span>{" "}
              This product is currently in pre-order. Expected to start shipping in SEPT 2026.
            </p>
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

        <section className="rounded-3xl border border-line bg-surface px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">About Gauge Cluster Studio</p>
          <h2 className="mt-3 max-w-3xl font-mono text-3xl leading-tight md:text-4xl">
            Engineered for OEM-Level Integration
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              Gauge Cluster Studio develops precision digital instrument clusters for a wide range of vehicles,
              from modern performance platforms to reimagined classics. Every system is designed with factory-level
              fitment, electrical integration, and visual harmony in mind.
            </p>
            <p>
              We do not build universal screens. We engineer vehicle-specific solutions that install cleanly, retain
              OEM functionality where possible, and elevate the driving experience without compromising the character
              of the car.
            </p>
            <p>
              From enclosure design and mounting geometry to signal integration and UI refinement, each cluster is
              developed with an uncompromising focus on quality, durability, and finish, built to look and feel like
              it belonged there from the factory.
            </p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61586396952431"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full border border-line bg-background px-6 py-3 text-sm font-semibold transition hover:border-foreground"
          >
            Follow on Facebook
          </a>
        </section>
      </main>
    </div>
  );
}
