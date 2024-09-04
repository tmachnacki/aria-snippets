"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const Accordion = ArkAccordion.Root;

const accordionItemVariants = cva("", {
  variants: {
    variant: {
      stacked: "border-b",
      split: "border rounded-lg mb-2 last:mb-0 bg-muted px-2",
    },
    defaultVariants: {
      variant: "stacked",
    },
  },
});

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.Item> &
    VariantProps<typeof accordionItemVariants>
>(({ className, variant = "stacked", ...props }, ref) => (
  <ArkAccordion.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.ItemTrigger>,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  <ArkAccordion.ItemTrigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between py-4 text-left",
      className,
    )}
    {...props}
  >
    {children}
    <ArkAccordion.ItemIndicator className="m-0 inline-flex items-center justify-center p-0 [&[data-scope=accordion][data-part=item-indicator][data-state=open]>svg]:-rotate-90">
      <ChevronLeftIcon className="size-5 rotate-0 transition-transform" />
    </ArkAccordion.ItemIndicator>
  </ArkAccordion.ItemTrigger>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.ItemContent>,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemContent>
>(({ className, children, ...props }, ref) => (
  <ArkAccordion.ItemContent
    ref={ref}
    className={cn(
      "data-[scope=accordion]:data-[part=item-content]:data-[state=closed]:animate-collapse-up data-[scope=accordion]:data-[part=item-content]:data-[state=open]:animate-collapse-down overflow-hidden text-sm transition-all",
      className,
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-muted-foreground", className)}>
      {children}
    </div>
  </ArkAccordion.ItemContent>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
