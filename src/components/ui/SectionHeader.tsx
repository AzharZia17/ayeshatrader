import * as React from "react";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <Badge
          variant="outline"
          className="mb-3 rounded-full border-[#167346]/30 bg-[#E8F5EE] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#167346]"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[#202522] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

