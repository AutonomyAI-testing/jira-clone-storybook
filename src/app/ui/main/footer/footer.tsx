import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: <FaFacebook size={18} aria-hidden />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <FaLinkedin size={18} aria-hidden />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram size={18} aria-hidden />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <FaYoutube size={18} aria-hidden />,
  },
];

const companyNavLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "Contact Us", href: "#" },
];

const legalLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex w-full items-center justify-between bg-white px-36 py-7">
      {/* Copyright */}
      <p className="font-primary text-sm text-red-600">
        © SuddenlySpaces, 2024
      </p>

      {/* Company nav */}
      <nav aria-label="Company navigation" className="flex items-center gap-6">
        <span className="text-sm font-bold text-red-600">Company</span>
        {companyNavLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="font-primary text-sm text-red-600 hover:opacity-70"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Social icons */}
      <div className="flex items-center gap-2">
        {socialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-[#1a1a1a] text-white hover:opacity-80"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Legal links */}
      <div className="flex items-center gap-4">
        {legalLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="font-primary text-sm text-red-600 hover:opacity-70"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
};
