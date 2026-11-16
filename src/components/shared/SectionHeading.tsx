import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
  inverse?: boolean;
  action?: React.ReactNode;
}

export function SectionHeading({ eyebrow, title, description, as: Tag = "h2", className, inverse, action }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col justify-between gap-6 md:flex-row md:items-end", className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className={cn("eyebrow", inverse && "text-white/70")}>{eyebrow}</p>}
        <Tag className={cn("display text-[2rem] sm:text-6xl", eyebrow && "mt-5", inverse && "text-white")}>{title}</Tag>
        {description && <p className={cn("mt-5 text-lg leading-relaxed", inverse ? "text-white/75" : "text-charcoal-muted")}>{description}</p>}
      </div>
      {action}
    </div>
  );
}
