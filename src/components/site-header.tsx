"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/people", label: "People" },
  { href: "/rules", label: "Rules" },
  { href: "/media", label: "Media" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" href="/" aria-label="ZMBA home">
          <Image
            src="/images/brand/zmba-mark.jpg"
            alt="ZMBA shield"
            width={54}
            height={53}
            priority
          />
          <span className="brand-wordmark">ZMBA</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={active ? "nav-link is-active" : "nav-link"}
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              className={active ? "mobile-nav-link is-active" : "mobile-nav-link"}
              href={item.href}
              key={item.href}
              aria-current={active ? "page" : undefined}
              tabIndex={menuOpen ? undefined : -1}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
