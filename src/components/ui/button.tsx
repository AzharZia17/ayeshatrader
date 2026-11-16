import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2  text-[0.8125rem] font-semibold tracking-[0.02em] whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand-hover hover:shadow-[0_10px_24px_-10px_rgba(12,13,8,0.7)]",
        outline: "border border-brand/30 bg-transparent text-brand hover:border-brand hover:bg-brand hover:text-white",
        "outline-inverse": "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand",
        inverse: "bg-white text-brand hover:bg-surface-gray hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)]",
        secondary: "bg-surface-gray text-charcoal hover:bg-[#ebe6e2]",
        ghost: "text-charcoal hover:bg-surface-gray",
        link: "h-auto  p-0 text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-sm",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
