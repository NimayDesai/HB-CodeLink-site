import "reflect-metadata";
import "dotenv-safe/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import {
  CommentRelationsResolver,
  PostRelationsResolver,
  UserRelationsResolver,
} from "../prisma/generated";
import { PrismaClient } from "@prisma/client";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import http from "http";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { __prod__, COOKIE_NAME } from "./constants";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import { sendEmail } from "./utils/sendEmail";

const prisma = new PrismaClient({
  log: !__prod__ ? ["query", "info", "warn", "error"] : [],
});

async function main() {
  // sendEmail("752872@pdsb.net", "Gay ppl are cool", "Sach is nice guy");
  const app = express();
  const redis = new Redis();
  const RedisStore = new connectRedis({
    client: redis,
    disableTouch: true,
  });

  app.use(
    session({
      name: COOKIE_NAME,
      store: RedisStore,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: __prod__,
        sameSite: "lax",
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        UserResolver,
        PostResolver,
        UserRelationsResolver,
        PostRelationsResolver,
        CommentRelationsResolver,
      ],
      validate: false,
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: "http://localhost:3000",
      credentials: true,
    }),
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }): Promise<MyContext> => ({
        req,
        res,
        prisma,
        redis,
      }),
    })
  );

  app.listen(4000, () => {
    console.log("server started on localhost:4000 🚀");
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
