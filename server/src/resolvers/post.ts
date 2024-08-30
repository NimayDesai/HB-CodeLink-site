import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Comment, Post } from "../../prisma/generated";
import { MyContext } from "../types";
import { isAuth } from "../utils/isAuth";
import { checkIfVerified } from "../utils/checkIfVerified";
import { User } from "@prisma/client";

@InputType()
class PostInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  content: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field(() => Boolean)
  hasMore: boolean;
}
@ObjectType()
class PaginatedComments {
  @Field(() => [Comment])
  comments: Comment[];
  @Field(() => Boolean)
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @Mutation(() => Comment)
  async createComment(
    @Arg("content", () => String) content: string,
    @Arg("postId", () => Int) postId: number,
    @Ctx() { prisma, req }: MyContext
  ): Promise<Comment> {
    if (!req.session.userId) {
      throw new Error("not logged in");
    }
    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
    });
    checkIfVerified(user as User);
    return prisma.comment.create({
      data: {
        content,
        postId,
        commenterId: req.session.userId,
      },
      include: {
        commenter: true,
        post: true,
      },
    });
  }

  @Query(() => Int)
  async commentCount(
    @Arg("postId", () => Int) postId: number,
    @Ctx() { prisma }: MyContext
  ) {
    return prisma.comment.count({ where: { postId } });
  }

  @Query(() => PaginatedComments)
  async comments(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => Int, { nullable: true }) cursor: number,
    @Arg("postId", () => Int) postId: number,
    @Ctx() { prisma }: MyContext
  ): Promise<PaginatedComments> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const comments = await prisma.comment.findMany({
      take: realLimitPlusOne,
      include: {
        commenter: true,
      },
      where: {
        postId: postId,
      },
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: "desc",
      },
    });
    return {
      comments: comments.slice(0, realLimit),
      hasMore: comments.length === realLimitPlusOne,
    };
  }

  @Query(() => Comment)
  async comment(
    @Arg("commentId", () => Int) commentId: number,
    @Ctx() { prisma }: MyContext
  ) {
    const post = await prisma.comment.findUnique({
      where: { id: commentId },
      include: {
        commenter: true,
        post: true,
      },
    });
    if (post) {
      return post;
    } else {
      return;
    }
  }
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteComment(
    @Arg("commentId", () => Int) commentId: number,
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req, prisma }: MyContext
  ) {
    await prisma.comment.delete({
      where: {
        id: commentId,
        postId,
        commenterId: req.session.userId,
      },
    });
    return true;
  }

  @Query(() => Int)
  async postCount(@Ctx() { prisma }: MyContext): Promise<number> {
    return prisma.post.count();
  }
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Ctx() { req, prisma }: MyContext,
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number
  ): Promise<boolean> {
    const isStar = value !== -1;
    const realValue = isStar ? 1 : -1;
    const userId = req.session.userId as number;

    const star = await prisma.star.findUnique({
      where: {
        userId_postId: {
          postId,
          userId: userId,
        },
      },
    });

    if (star && star.value !== -1) {
      await prisma.$transaction([
        prisma.star.update({
          data: {
            value: realValue,
          },
          where: {
            userId_postId: {
              userId,
              postId,
            },
          },
        }),
        prisma.post.update({
          data: {
            points: {
              increment: realValue,
            },
          },
          where: {
            id: postId,
          },
        }),
      ]);
    } else if (!star) {
      await prisma.$transaction([
        prisma.star.create({
          data: {
            userId,
            postId,
            value: realValue,
          },
        }),
        prisma.post.update({
          data: {
            points: {
              increment: realValue,
            },
          },
          where: {
            id: postId,
          },
        }),
      ]);
    }
    return true;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit") limit: number,
    @Arg("offset", () => Int, { nullable: true }) offset: number | undefined,
    @Ctx() { prisma }: MyContext
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const posts = await prisma.post.findMany({
      take: realLimitPlusOne,
      skip: offset ? offset : undefined,
      include: {
        author: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }
  @Query(() => Post, { nullable: true })
  async post(
    @Arg("id", () => Int) id: number,
    @Ctx() { prisma }: MyContext
  ): Promise<Post | undefined> {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
    if (post) {
      return post;
    }
    return;
  }
  @UseMiddleware(isAuth)
  @Mutation(() => Post)
  async createPost(
    @Arg("input", () => PostInput) input: PostInput,
    @Ctx() { req, prisma }: MyContext
  ): Promise<Post> {
    if (!req.session.userId) {
      throw new Error("not logged in");
    }
    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
    });
    checkIfVerified(user as User);
    return prisma.post.create({
      data: {
        ...input,
        authorId: req.session.userId,
      },
    });
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req, prisma }: MyContext
  ) {
    await prisma.post.delete({
      where: {
        id: postId,
        authorId: req.session.userId,
      },
    });
    return true;
  }
}
