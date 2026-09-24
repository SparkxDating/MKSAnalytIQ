import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  business: z.string().trim().min(2).max(120),
  service: z.string().trim().min(2).max(80),
  budget: z.enum(["15k", "30k", "50k+", "1L+"]),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/),
});

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = schema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) return Response.json({ ok: false }, { status: 400 });
        return Response.json({ ok: true, stored: false });
      },
    },
  },
});
