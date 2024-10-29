import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema, RegisterSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", LoginSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    console.log({ email, password });

    return c.json({ email, password });
  })
  .post("/register", zValidator("json", RegisterSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");
    console.log({ name, email, password });

    return c.json({ name, email, password });
  });

export default app;
