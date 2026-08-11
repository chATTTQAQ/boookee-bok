import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-pill px-6 py-3 text-base font-medium transition-all duration-300 ease-apple";

  const styles = {
    primary: "bg-accent text-white hover:opacity-90 hover:scale-[1.02]",
    secondary:
      "bg-transparent text-text-primary border border-border hover:bg-bg-secondary",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
