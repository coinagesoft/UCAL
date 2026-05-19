"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  companyLinks,
  primaryNavLinks,
  productServiceLinks,
} from "@/constants/navigation";
import styles from "./Navbar.module.css";

function NavUnderline({ active }) {
  return active ? <span className={styles.activeUnderline} /> : null;
}

function getLinkClassName({ active, isHome }) {
  return [
    "nav-link",
    styles.navLink,
    active ? styles.activeLink : isHome ? styles.homeLink : styles.solidLink,
  ].join(" ");
}

function DropdownNavItem({ label, path, links, isHome, isActive }) {
  const active = isActive(path);

  return (
    <li className="nav-item dropdown h-100">
      <div
        className={`${getLinkClassName({ active, isHome })} dropdown-toggle h-100 ${styles.dropdownTrigger}`}
        data-bs-toggle="dropdown"
      >
        {label}
        <NavUnderline active={active} />
      </div>
      <ul className="dropdown-menu border-0 shadow-sm">
        {links.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <Link className="dropdown-item" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function SimpleNavItem({ label, href, isHome, isActive }) {
  const active = isActive(href);

  return (
    <li className="nav-item h-100">
      <Link className={getLinkClassName({ active, isHome })} href={href}>
        {label}
        <NavUnderline active={active} />
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    return path !== "/" && pathname.startsWith(path);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg p-0 ${styles.navbar} ${
        isHome ? styles.homeNavbar : styles.solidNavbar
      }`}
    >
      <div className={`container-fluid h-100 ${styles.inner}`}>
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <img src="/media/logo.png" alt="UCAL Logo" className={styles.logo} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse h-100" id="navbarNav">
          <ul
            className={`navbar-nav h-100 ms-auto align-items-center ${styles.menu}`}
          >
            <SimpleNavItem label={primaryNavLinks[0].label} href={primaryNavLinks[0].href} isHome={isHome} isActive={isActive} />
            <DropdownNavItem label="COMPANY" path="/company" links={companyLinks} isHome={isHome} isActive={isActive} />
            <DropdownNavItem label="PRODUCTS & SERVICES" path="/products" links={productServiceLinks} isHome={isHome} isActive={isActive} />
            {primaryNavLinks.slice(1).map((item) => (
              <SimpleNavItem key={item.href} {...item} isHome={isHome} isActive={isActive} />
            ))}
          </ul>

          <div className="ms-lg-4 py-3 py-lg-0">
            <button className="custom-btn">Request For Quote</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
