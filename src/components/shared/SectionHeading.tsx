import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
  /** Optional element aligned to the right on wide screens (e.g. a link) */
  action?: React.ReactNode;
}

export function SectionHeading({ eyebrow, title, description, as: Tag = "h2", className, action }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col justify-between gap-6 md:flex-row md:items-end", className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag className={cn("text-3xl font-semibold tracking-tight sm:text-4xl", eyebrow && "mt-3")}>{title}</Tag>
        {description && <p className="mt-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">{description}</p>}
      </div>
      {action}
    </div>
  );
}
