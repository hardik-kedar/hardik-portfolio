"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";
const Sheet = Dialog.Root;

const SheetTrigger = Dialog.Trigger;

const SheetClose = Dialog.Close;

const SheetPortal = Dialog.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
      className
    )}
    {...props}
    ref={ref}
  />
));

SheetOverlay.displayName = Dialog.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content> & {
    side?: "top" | "right" | "bottom" | "left";
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />

    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed z-50 flex flex-col gap-4 bg-[#050816] p-6 shadow-2xl transition ease-in-out",
        side === "right" &&
          "inset-y-0 right-0 h-full w-[300px] border-l border-white/10",
        side === "left" &&
          "inset-y-0 left-0 h-full w-[300px] border-r border-white/10",
        side === "top" &&
          "inset-x-0 top-0 border-b border-white/10",
        side === "bottom" &&
          "inset-x-0 bottom-0 border-t border-white/10",
        className
      )}
      {...props}
    >
      {children}

      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
        <X className="h-5 w-5 text-white" />
      </SheetClose>
    </Dialog.Content>
  </SheetPortal>
));

SheetContent.displayName = Dialog.Content.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
};