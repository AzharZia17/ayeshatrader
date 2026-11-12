"use client";

import * as React from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE_1,
  PHONE_2,
  LOCATION,
  MAPS_URL,
  getWhatsAppLink,
} from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    category: "PVC Electric Wires",
    sizes: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      errs.phone = "Please enter a valid 11-digit phone number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please provide details regarding your inquiry";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const getCustomWhatsAppUrl = () => {
    const text = `Hello Ayesha Traders!
Name: ${formData.name || "Customer"}
Phone: ${formData.phone || "Not provided"}
Product Category: ${formData.category}
Required Size/Quantity: ${formData.sizes || "General inquiry"}
Inquiry Details: ${formData.message || "Please provide price list."}`;
    return getWhatsAppLink(text);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-[#E5E7EB] bg-[#F5F6F4] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Get in Touch"
            title="Contact Ayesha Traders"
            subtitle="Reach out directly for wholesale quotes, immediate coil availability, or project inquiries. Visit our shop in Noshera Sansi or message us on WhatsApp for fast response."
            align="center"
          />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Contact Info Column */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <h3 className="text-2xl font-bold text-[#202522]">
                  Direct Contact &amp; Location
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  We are available to answer your calls and WhatsApp messages during working hours. For urgent quotes, WhatsApp is the fastest channel.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <Card className="rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167346]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Phone Lines
                      </span>
                      <div className="flex flex-col gap-1">
                        <a
                          href={`tel:${PHONE_1}`}
                          className="text-base font-bold text-[#202522] hover:text-[#167346]"
                        >
                          {PHONE_1}
                        </a>
                        <a
                          href={`tel:${PHONE_2}`}
                          className="text-base font-bold text-[#202522] hover:text-[#167346]"
                        >
                          {PHONE_2}
                        </a>
                      </div>
                      <p className="text-xs text-gray-500 pt-1">
                        Click any number to call directly
                      </p>
                    </div>
                  </div>
                </Card>

                {/* WhatsApp Card */}
                <Card className="rounded-2xl border border-[#167346]/30 bg-[#E8F5EE]/40 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#167346] text-white">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#167346]">
                        Instant Messaging
                      </span>
                      <p className="text-sm font-semibold text-[#202522]">
                        WhatsApp Quotation Service
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Send product photos, wire gauge requirements, or bill of quantities for instant pricing.
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-[#167346] font-semibold text-white hover:bg-[#125d38]"
                      >
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Start WhatsApp Chat</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Location Card */}
                <Card className="rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F6F4] text-[#202522]">
                      <MapPin className="h-6 w-6 text-[#167346]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Shop Location
                      </span>
                      <p className="text-sm font-bold text-[#202522]">
                        {LOCATION}
                      </p>
                      <p className="text-xs text-gray-500">
                        Noshera Sansi, near Galla Ismail, Bat Tozi Wala, Gujranwala
                      </p>
                      <div className="pt-2">
                        <a
                          href={MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#167346] hover:underline"
                        >
                          <span>Open Location Map</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Operating Hours */}
                <Card className="rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F6F4] text-[#202522]">
                      <Clock className="h-6 w-6 text-[#167346]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Working Hours
                      </span>
                      <p className="text-sm font-semibold text-[#202522]">
                        Monday &ndash; Saturday: 8:30 AM &ndash; 7:30 PM
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Sunday: Inquiries via WhatsApp
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-md md:p-10">
                <h3 className="text-2xl font-bold text-[#202522]">
                  Send an Inquiry
                </h3>
                <p className="mt-1 text-sm text-[#4B5563]">
                  Fill out the form below. You can submit it directly or forward it straight to WhatsApp.
                </p>

                {isSubmitted ? (
                  /* Success Feedback */
                  <div className="my-8 rounded-2xl border border-[#167346]/30 bg-[#E8F5EE] p-6 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#167346] text-white">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-[#202522]">
                      Inquiry Received!
                    </h4>
                    <p className="text-sm text-[#4B5563] max-w-md mx-auto">
                      Thank you, <strong className="text-[#202522]">{formData.name}</strong>. Your inquiry for {formData.category} has been recorded. For the fastest response, send these details directly via WhatsApp:
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                      <Button
                        asChild
                        className="rounded-full bg-[#167346] px-6 font-semibold text-white hover:bg-[#125d38]"
                      >
                        <a
                          href={getCustomWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Send this Inquiry to WhatsApp</span>
                        </a>
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            category: "PVC Electric Wires",
                            sizes: "",
                            message: "",
                          });
                        }}
                        className="rounded-full border-[#E5E7EB]"
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#202522]"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="e.g. Muhammad Ahmad"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`mt-1.5 h-11 rounded-xl border-[#E5E7EB] focus-visible:ring-[#167346] ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#202522]"
                      >
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 0300-1234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`mt-1.5 h-11 rounded-xl border-[#E5E7EB] focus-visible:ring-[#167346] ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Product Category & Size */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="category"
                          className="block text-xs font-bold uppercase tracking-wider text-[#202522]"
                        >
                          Product Interest
                        </label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) =>
                            setFormData({ ...formData, category: e.target.value })
                          }
                          className="mt-1.5 flex h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-xs text-[#202522] focus:border-[#167346] focus:outline-none focus:ring-2 focus:ring-[#167346]/20"
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="sizes"
                          className="block text-xs font-bold uppercase tracking-wider text-[#202522]"
                        >
                          Required Size / Quantity
                        </label>
                        <Input
                          id="sizes"
                          type="text"
                          placeholder="e.g. 7/0.029 (5 Coils)"
                          value={formData.sizes}
                          onChange={(e) =>
                            setFormData({ ...formData, sizes: e.target.value })
                          }
                          className="mt-1.5 h-11 rounded-xl border-[#E5E7EB] focus-visible:ring-[#167346]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#202522]"
                      >
                        Inquiry Details / Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Please write your questions, specifications, or request quotation details..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`mt-1.5 rounded-xl border-[#E5E7EB] focus-visible:ring-[#167346] ${
                          errors.message ? "border-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Action Buttons */}
                    <div className="pt-2 flex flex-col gap-3 sm:flex-row">
                      <Button
                        type="submit"
                        className="h-12 flex-1 rounded-xl bg-[#167346] font-semibold text-white shadow-md hover:bg-[#125d38]"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        <span>Submit Inquiry</span>
                      </Button>

                      <Button
                        asChild
                        type="button"
                        variant="outline"
                        className="h-12 flex-1 rounded-xl border-2 border-[#167346] font-semibold text-[#167346] hover:bg-[#E8F5EE]"
                      >
                        <a
                          href={getCustomWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Send Directly to WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

