import { Clock, MapPin, Phone } from "lucide-react";
import { ADDRESS_SHORT, BUSINESS_HOURS, CONTACT_NUMBERS, MAPS_URL } from "@/lib/constants";

export function UtilityBar() {
  return (
    <div className="bg-charcoal text-[0.8125rem] text-white/80">
      <div className="container-page flex min-h-10 items-center justify-between gap-6">
        <ul className="hidden items-center gap-6 lg:flex">
          <li className="flex items-center gap-2">
            <MapPin aria-hidden className="size-3.5 text-white/50" />
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {ADDRESS_SHORT}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Clock aria-hidden className="size-3.5 text-white/50" />
            <span>{BUSINESS_HOURS}</span>
          </li>
        </ul>
        <p className="flex items-center gap-2 lg:hidden">
          <Clock aria-hidden className="size-3.5 text-white/50" />
          <span>Mon–Sat, 8:30 AM–7:30 PM</span>
        </p>
        <ul className="flex items-center gap-5">
          {CONTACT_NUMBERS.map((n, i) => (
            <li key={n.tel} className={i > 0 ? "hidden sm:block" : undefined}>
              <a href={`tel:${n.tel}`} className="flex items-center gap-2 font-medium text-white hover:text-white/80">
                {i === 0 && <Phone aria-hidden className="size-3.5 text-white/50" />}
                {n.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
