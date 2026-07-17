"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/portfolio";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <Link className="brand" href="/" aria-label="Legendarium home">
        <span className="brand-mark">L</span>
        <span>
          Legendarium
          <small>Video Editor</small>
        </span>
      </Link>

      <nav aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link className={isActive ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
