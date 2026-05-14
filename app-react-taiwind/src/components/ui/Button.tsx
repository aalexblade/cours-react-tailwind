import React, { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  const variants = {
    primary: "bg-coffee-dark text-cream hover:bg-coffee-medium transition-colors",
    outline: "border-2 border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-cream transition-all",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee-medium outline-none disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
