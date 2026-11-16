import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-6 text-6xl sm:text-8xl">
          Page not <span className="text-brand">found.</span>
        </h1>
        <p className="mt-6 text-lg text-charcoal-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-10 flex gap-3">
          <Button asChild size="lg">
            <Link href="/products">Browse products</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
