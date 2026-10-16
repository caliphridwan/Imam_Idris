"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { delay } from "@/lib/motion";
import { Close, Download, Menu } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "border-line shadow-[0_8px_24px_-16px_rgba(23,33,29,0.35)]" : "border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.shortTitle} — home`}>
          <Image
            src={site.images.logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain transition-transform duration-500 group-hover:rotate-[22.5deg]"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">{site.name}</span>
            <span className="block text-xs text-ink-soft">Educationist · Islamic Scholar</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive(item.href) ? "bg-green-light text-green-deep" : "text-ink-soft hover:bg-paper-deep hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.cv} download className="btn-primary ml-3">
            <Download width={16} height={16} /> Download CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="animate-drop border-t border-line bg-paper lg:hidden">
          <ul className="container flex flex-col py-3">
            {nav.map((item, i) => (
              <li key={item.href} className="animate-rise" style={delay(40 + i * 45)}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-[48px] items-center border-b border-line/60 text-base font-semibold ${
                    isActive(item.href) ? "text-green" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <a href={site.cv} download className="btn-primary w-full">
                <Download width={16} height={16} /> Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
