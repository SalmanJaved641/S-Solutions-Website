export interface NavItem { label: string; href: string }

export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
];

export const footerNav: NavItem[] = [
  { label: "About Us", href: "/#about" },
  { label: "Service", href: "/#services" },
  { label: "Work", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy & Policy", href: "/privacy" },
];
