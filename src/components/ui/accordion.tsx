"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  type: "single" | "multiple";
  collapsible: boolean;
  value: string[];
  setValue: (values: string[]) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion components must be used within <Accordion>");
  return ctx;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

function Accordion({
  type = "single",
  collapsible = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
  ...props
}: AccordionProps) {
  const isSingle = type === "single";
  const [internalValue, setInternalValue] = React.useState<string[]>(() => {
    if (defaultValue == null) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const value = React.useMemo<string[]>(() => {
    if (controlledValue == null) return internalValue;
    return Array.isArray(controlledValue) ? controlledValue : [controlledValue];
  }, [controlledValue, internalValue]);

  const setValue = React.useCallback(
    (values: string[]) => {
      setInternalValue(values);
      if (onValueChange) {
        onValueChange(isSingle ? values[0] ?? "" : values);
      }
    },
    [onValueChange, isSingle]
  );

  return (
    <AccordionContext.Provider value={{ type, collapsible, value, setValue }}>
      <div className={cn("flex w-full flex-col", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

function AccordionItem({ value: itemValue, className, children, ...props }: AccordionItemProps) {
  const { value, setValue, type, collapsible } = useAccordion();
  const open = value.includes(itemValue);

  const toggle = () => {
    if (type === "single") {
      if (open) {
        if (collapsible) setValue([]);
      } else {
        setValue([itemValue]);
      }
    } else {
      setValue(
        open ? value.filter((v) => v !== itemValue) : [...value, itemValue]
      );
    }
  };

  return (
    <div
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    >
      <AccordionItemContext.Provider value={{ open, toggle, itemValue }}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
}

type AccordionItemContextValue = {
  open: boolean;
  toggle: () => void;
  itemValue: string;
};

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

function useAccordionItem() {
  const ctx = React.useContext(AccordionItemContext);
  if (!ctx) throw new Error("AccordionItem components must be used within <AccordionItem>");
  return ctx;
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, toggle } = useAccordionItem();

  return (
    <h3 className="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        data-open={open}
        aria-expanded={open}
        onClick={toggle}
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between gap-2 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className={cn(
            "pointer-events-none shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
        <ChevronUpIcon className="sr-only" />
      </button>
    </h3>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useAccordionItem();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div
      data-slot="accordion-content"
      className="overflow-hidden transition-[height] duration-300 ease-in-out"
      style={{ height: open ? height : 0 }}
      {...props}
    >
      <div ref={contentRef} className={cn("pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className)}>
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
