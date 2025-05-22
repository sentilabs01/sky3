import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "lg" | "md" | "sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    let base = "rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ";
    let variants = {
      default: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
      outline: "border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
    };
    let sizes = {
      lg: "h-12 px-5 text-base",
      md: "h-10 px-4 text-sm",
      sm: "h-8 px-3 text-xs"
    };
    return (
      <button
        ref={ref}
        className={[
          base,
          variants[variant],
          sizes[size],
          className
        ].join(" ")}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"; 