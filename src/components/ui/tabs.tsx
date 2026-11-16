"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cn } from "@/lib/utils"

function Tabs({ className, orientation = "horizontal", ...props }: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" orientation={orientation} className={cn("flex flex-col gap-6", className)} {...props} />
}

/** Pill strip. Scrolls horizontally on small screens. */
function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex w-full items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "shrink-0 cursor-pointer  border border-border-strong px-5 py-2.5 text-[0.8125rem] font-semibold whitespace-nowrap text-charcoal-muted transition-all duration-300 outline-none hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 data-active:border-brand data-active:bg-brand data-active:text-white",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-content" className={cn("outline-none", className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
