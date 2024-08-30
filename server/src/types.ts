import { PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import session from "express-session";
import { Redis } from "ioredis";

export type MyContext = {
  req: Request & { session: session.Session & Partial<session.SessionData> };
  res: Response;
  redis: Redis;
  prisma: PrismaClient<
    {
      log: ("info" | "query" | "warn" | "error")[];
    },
    never,
    DefaultArgs
  >;
};
