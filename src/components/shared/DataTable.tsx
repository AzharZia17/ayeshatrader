import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { InfoTable } from "@/lib/technical";

/** Renders an InfoTable. First column is emphasised as the row header. */
export function DataTable({ table, title }: { table: InfoTable; title?: string }) {
  return (
    <figure className="min-w-0">
      {title && <figcaption className="mb-3 text-sm font-semibold text-charcoal">{title}</figcaption>}
      <Table>
        <TableCaption>{table.caption}</TableCaption>
        <TableHeader>
          <TableRow>
            {table.columns.map((c) => (
              <TableHead key={c} scope="col">
                {c}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <TableHead key={i} scope="row" className="font-semibold tracking-normal text-charcoal normal-case text-sm whitespace-normal">
                    {cell}
                  </TableHead>
                ) : (
                  <TableCell key={i}>{cell}</TableCell>
                ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {table.note && <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{table.note}</p>}
    </figure>
  );
}
