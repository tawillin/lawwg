import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 rounded-sm cursor-pointer";

  const variants = {
    primary: "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-md hover:shadow-lg",
    secondary: "bg-navy-800 text-white border border-gold-500 hover:bg-navy-700",
    outline: "bg-transparent text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-navy-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
