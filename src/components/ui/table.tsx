import * as React from "react"
import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto border-y border-border-strong bg-transparent">
      <table data-slot="table" className={cn("w-full min-w-[34rem] caption-top border-collapse text-left text-sm", className)} {...props} />
    </div>
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return <caption className={cn("sr-only", className)} {...props} />
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead className={cn("border-b border-border-strong", className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr className={cn("border-b border-border", className)} {...props} />
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn("px-4 py-4 text-left text-[0.6875rem] font-bold tracking-[0.14em] whitespace-nowrap text-brand uppercase", className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <td className={cn("px-4 py-4 align-top text-charcoal-muted", className)} {...props} />
}

export { Table, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell }
