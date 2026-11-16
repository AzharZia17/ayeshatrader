"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { BUSINESS_NAME, getWhatsAppLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Values {
  name: string;
  phone: string;
  category: string;
  requirement: string;
  message: string;
}
type Errors = Partial<Record<keyof Values, string>>;

const OTHER = "Other / Not sure";
const categoryOptions = [...CATEGORIES.map((c) => c.name), OTHER];
const initial: Values = { name: "", phone: "", category: "", requirement: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name.";
  const digits = v.phone.replace(/[\s-]/g, "");
  if (!/^(\+?92|0)?3\d{9}$|^\+?\d{9,14}$/.test(digits)) e.phone = "Enter a valid phone number, e.g. 0320-5451000.";
  if (!v.category) e.category = "Select a product category.";
  if (v.requirement.trim().length < 3) e.requirement = "Enter the size and quantity you need.";
  if (v.message.length > 1000) e.message = "Message must be under 1000 characters.";
  return e;
}

function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.6875rem] font-bold tracking-[0.14em] text-charcoal-muted uppercase">
        {label}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-xs text-charcoal-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function InquiryForm() {
  const [values, setValues] = React.useState<Values>(initial);
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitted, setSubmitted] = React.useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);
    const firstKey = (Object.keys(found) as (keyof Values)[])[0];
    if (firstKey) {
      document.getElementById(`inquiry-${firstKey}`)?.focus();
      return;
    }
    const lines = [
      `Hello ${BUSINESS_NAME}, I would like to send an inquiry.`,
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Product category: ${values.category}`,
      `Required size and quantity: ${values.requirement.trim()}`,
      ...(values.message.trim() ? ["", `Message: ${values.message.trim()}`] : []),
    ];
    window.open(getWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const invalid = (k: keyof Values) => (errors[k] ? true : undefined);
  const describe = (k: keyof Values, hint = false) => (errors[k] ? `inquiry-${k}-error` : hint ? `inquiry-${k}-hint` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-label="Product inquiry form">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="inquiry-name" label="Full name" error={errors.name}>
          <Input id="inquiry-name" name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} aria-invalid={invalid("name")} aria-describedby={describe("name")} required />
        </Field>
        <Field id="inquiry-phone" label="Phone number" error={errors.phone}>
          <Input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="0320-5451000" value={values.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={invalid("phone")} aria-describedby={describe("phone")} required />
        </Field>
      </div>

      <Field id="inquiry-category" label="Product category" error={errors.category}>
        <Select value={values.category} onValueChange={(v) => set("category", v ?? "")}>
          <SelectTrigger id="inquiry-category" aria-invalid={invalid("category")} aria-describedby={describe("category")}>
            <SelectValue placeholder="Select a category">{values.category || undefined}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field id="inquiry-requirement" label="Required size and quantity" error={errors.requirement} hint="Example: 7/0.036 single core, 10 coils">
        <Input id="inquiry-requirement" name="requirement" value={values.requirement} onChange={(e) => set("requirement", e.target.value)} aria-invalid={invalid("requirement")} aria-describedby={describe("requirement", true)} required />
      </Field>

      <Field id="inquiry-message" label="Message (optional)" error={errors.message}>
        <Textarea id="inquiry-message" name="message" rows={4} value={values.message} onChange={(e) => set("message", e.target.value)} aria-invalid={invalid("message")} aria-describedby={describe("message")} />
      </Field>

      <div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <MessageCircle aria-hidden />
          Send Inquiry to WhatsApp
        </Button>
        <p className="mt-3 text-xs text-charcoal-muted">Opens WhatsApp with your inquiry ready to send.</p>
      </div>
    </form>
  );
}
