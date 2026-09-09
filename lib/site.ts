export const navItems = [
  { label: "Academy", href: "/academy" },
  { label: "Lab", href: "/lab" },
  { label: "Stage", href: "/stage" },
  { label: "Voice", href: "/voice" },
  { label: "About", href: "/about" },
] as const;

export const footerItems = [...navItems, { label: "Contact", href: "/contact" }] as const;

export const contactEmail = "info@growingclever.com";
