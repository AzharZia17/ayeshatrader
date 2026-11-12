import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-[4px] px-2 py-0.5 text-[0.6875rem] font-semibold tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-brand text-white",
        secondary: "bg-surface-gray text-charcoal-muted",
        outline: "border border-border-strong text-charcoal-muted",
        brand: "bg-brand-subtle text-brand",
      },
    },
    defaultVariants: { variant: "secondary" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
