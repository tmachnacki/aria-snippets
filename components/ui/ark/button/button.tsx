import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { PolymorphicProps, ark } from "@ark-ui/react/factory";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      colorPalette: {
        default: "bg-accent text-foreground hover:bg-accent/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        highlight:
          "bg-highlight text-highlight-foreground hover:bg-highlight/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-success text-success-foreground hover:bg-success/90",
        warning: "bg-warning text-warning-foreground",
      },
      variant: {
        default: "",
        outline: "",
        faded: "",
        shadow: "shadow-lg",
        tron: "relative overflow-hidden rounded-full bg-transparent text-foreground outline outline-1 hover:bg-transparent hover:bg-gradient-to-t hover:via-transparent hover:to-transparent hover:shadow-md focus-visible:outline focus-visible:outline-1 after:content-[''] after:absolute after:h-px after:w-[80%] after:-bottom-0 after:left-[10%] after:bg-gradient-to-r after:from-transparent after:to-transparent after:z-10 ",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-11 w-11",
      },
    },
    compoundVariants: [
      {
        colorPalette: "primary",
        variant: "outline",
        className:
          "bg-transparent border-2 border-primary outline-primary text-primary hover:bg-primary/10 ",
      },
      {
        colorPalette: "primary",
        variant: "faded",
        className: "bg-primary/10 text-primary hover:bg-primary/15 ",
      },
      {
        colorPalette: "primary",
        variant: "shadow",
        className: "shadow-primary/30 ",
      },
      {
        colorPalette: "primary",
        variant: "tron",
        className:
          "outline-primary/20 after:via-primary/90 hover:border-primary/30  hover:from-primary/30  hover:shadow-primary/30 hover:after:via-primary focus-visible:outline-primary/20",
      },
      {
        colorPalette: "primary",
        variant: "ghost",
        className: "bg-transparent text-primary hover:bg-primary/10 ",
      },
      {
        colorPalette: "primary",
        variant: "link",
        className: "bg-transparent hover:bg-transparent text-primary",
      },
      {
        colorPalette: "highlight",
        variant: "outline",
        className:
          "bg-transparent border-2 border-highlight outline-highlight text-highlight hover:bg-highlight/10 ",
      },
      {
        colorPalette: "highlight",
        variant: "faded",
        className: "bg-highlight/10 text-highlight hover:bg-highlight/15 ",
      },
      {
        colorPalette: "highlight",
        variant: "shadow",
        className: "shadow-highlight/30 ",
      },
      {
        colorPalette: "highlight",
        variant: "tron",
        className:
          "outline-highlight/20 after:via-highlight/90 hover:border-highlight/30  hover:from-highlight/30  hover:shadow-highlight/30 hover:after:via-highlight focus-visible:outline-highlight/20",
      },
      {
        colorPalette: "highlight",
        variant: "ghost",
        className: "bg-transparent text-highlight hover:bg-highlight/10 ",
      },
      {
        colorPalette: "highlight",
        variant: "link",
        className: "bg-transparent hover:bg-transparent text-highlight",
      },
      {
        colorPalette: "success",
        variant: "outline",
        className:
          "bg-transparent border-2 border-success outline-success text-success hover:bg-success/10 ",
      },
      {
        colorPalette: "success",
        variant: "faded",
        className: "bg-success/10 text-success hover:bg-success/15 ",
      },
      {
        colorPalette: "success",
        variant: "shadow",
        className: "shadow-success/30 ",
      },
      {
        colorPalette: "success",
        variant: "tron",
        className:
          "outline-success/20 after:via-success/90 hover:border-success/30  hover:from-success/30  hover:shadow-success/30 hover:after:via-success focus-visible:outline-success/20",
      },
      {
        colorPalette: "success",
        variant: "ghost",
        className: "bg-transparent text-success hover:bg-success/10 ",
      },
      {
        colorPalette: "success",
        variant: "link",
        className: "bg-transparent hover:bg-transparent text-success",
      },
      {
        colorPalette: "destructive",
        variant: "outline",
        className:
          "bg-transparent border-2 border-destructive outline-destructive text-destructive hover:bg-destructive/10 ",
      },
      {
        colorPalette: "destructive",
        variant: "faded",
        className:
          "bg-destructive/10 text-destructive hover:bg-destructive/15 ",
      },
      {
        colorPalette: "destructive",
        variant: "shadow",
        className: "shadow-destructive/30 ",
      },
      {
        colorPalette: "destructive",
        variant: "tron",
        className:
          "outline-destructive/20 after:via-destructive/90 hover:border-destructive/30  hover:from-destructive/30  hover:shadow-destructive/30 hover:after:via-destructive focus-visible:outline-destructive/20",
      },
      {
        colorPalette: "destructive",
        variant: "ghost",
        className: "bg-transparent text-destructive hover:bg-destructive/10 ",
      },
      {
        colorPalette: "destructive",
        variant: "link",
        className: "bg-transparent hover:bg-transparent text-destructive",
      },
    ],
    defaultVariants: {
      colorPalette: "default",
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PolymorphicProps,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, colorPalette, variant, size, asChild = false, ...props },
    ref,
  ) => {
    return (
      <ark.button
        className={cn(
          buttonVariants({ colorPalette, variant, size, className }),
        )}
        asChild={asChild}
        {...props}
        ref={ref}
      ></ark.button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
