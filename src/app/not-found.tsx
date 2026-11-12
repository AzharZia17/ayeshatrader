import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-lg text-charcoal-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link href="/products">Browse products</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
