import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/content";
import { Button } from "./button";

export function WhatsAppButton({
  source,
  children = "Chat on WhatsApp",
  message,
  variant = "line",
  className,
}: {
  source: string;
  children?: ReactNode;
  message?: string;
  variant?: "primary" | "ghost" | "line" | "soft";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} className={className}>
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { source })}
      >
        <MessageCircle className="size-4" aria-hidden />
        {children}
      </a>
    </Button>
  );
}
