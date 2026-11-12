"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

function SelectTrigger({ className, children, ...props }: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-border-strong bg-white px-3 text-left text-[0.9375rem] text-charcoal transition-colors outline-none hover:border-charcoal/50 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 data-popup-open:border-brand aria-invalid:border-destructive data-placeholder:text-[#8a918d]",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronDownIcon aria-hidden className="size-4 text-charcoal-muted" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value data-slot="select-value" className={cn("truncate", className)} {...props} />
}

function SelectContent({ className, children, ...props }: SelectPrimitive.Popup.Props) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner sideOffset={4} alignItemWithTrigger={false} className="z-[60]">
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "max-h-72 min-w-(--anchor-width) overflow-y-auto rounded-md border border-border bg-white p-1 text-sm text-charcoal shadow-lg outline-none",
            className
          )}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex cursor-pointer items-center gap-2 rounded-[4px] py-2 pr-8 pl-3 text-sm outline-none select-none data-highlighted:bg-surface-gray data-selected:font-semibold",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-2.5">
        <CheckIcon aria-hidden className="size-4 text-brand" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
