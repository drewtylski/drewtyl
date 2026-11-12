"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ModeToggle() {
  const path = usePathname();
  const isBrand = path?.startsWith("/brand");

  return (
    <div className="toggle" role="tablist" aria-label="View">
      <span className="toggle-pill" data-pos={isBrand ? "right" : "left"} aria-hidden />
      <Link href="/" role="tab" aria-selected={!isBrand} className={!isBrand ? "on" : ""}>
        Recruiter
      </Link>
      <Link href="/brand/" role="tab" aria-selected={isBrand} className={isBrand ? "on" : ""}>
        Brand
      </Link>
    </div>
  );
}
