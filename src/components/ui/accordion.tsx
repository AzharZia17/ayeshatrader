import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { PlusIcon, MinusIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col border-t border-border", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("border-b border-border", className)} {...props} />
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 cursor-pointer items-center justify-between gap-6 py-6 text-left font-display text-xl font-normal tracking-tight text-charcoal transition-colors outline-none hover:text-brand focus-visible:text-brand",
          className
        )}
        {...props}
      >
        {children}
        <PlusIcon aria-hidden className="size-4 shrink-0 text-charcoal-muted group-aria-expanded/accordion-trigger:hidden" />
        <MinusIcon aria-hidden className="hidden size-4 shrink-0 text-brand group-aria-expanded/accordion-trigger:block" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel data-slot="accordion-content" className="overflow-hidden text-[0.9375rem]" {...props}>
      <div className={cn("max-w-3xl pb-6 leading-relaxed text-charcoal-muted", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
